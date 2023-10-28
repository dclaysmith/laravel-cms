<?php

namespace Dclaysmith\LaravelCms\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Dclaysmith\LaravelCms\Models\Page;

use Dclaysmith\LaravelCms\Http\Requests\Api\Render\StoreRequest;

use Illuminate\Http\Resources\Json\JsonResource;

use Dclaysmith\LaravelCms\Http\Traits\AppliesDefaults;
use Dclaysmith\LaravelCms\Http\Traits\AppliesFilters;
use Dclaysmith\LaravelCms\Http\Traits\AppliesIncludes;
use Dclaysmith\LaravelCms\Http\Traits\AppliesPagination;
use Dclaysmith\LaravelCms\Http\Traits\AppliesSorts;

use Dclaysmith\LaravelCms\Http\Filters\Base as Filter;

class RenderController extends Controller
{
    use AppliesDefaults,
        AppliesFilters,
        AppliesIncludes,
        AppliesPagination,
        AppliesSorts;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        if ($cmsPageId = $request->input("cms_page_id")) {
            $page = Page::with("components")->find((int) $cmsPageId);
        } elseif (
            !($page = Page::with("components")->findByPath(
                $request->input("path")
            ))
        ) {
            return new JsonResource(null, 404);
        }

        // Page attributes
        $response = new \stdClass();
        $response->name = $page->name;
        $response->title = $page->title;
        $response->meta_keywords = $page->meta_keywords;
        $response->meta_description = $page->meta_description;
        $response->path = $page->path;
        $response->allow_index = $page->allow_index;

        $template = new \DOMDocument();
        $template->loadHTML(
            $page->template ? $page->template->html : "<div></div>",
            LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
        );

        $xpath = new \DOMXpath($template);

        foreach ($page->components as $component) {
            $element = new \DOMDocument();
            $element->loadHTML(
                $component->render($request),
                LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD | LIBXML_NOERROR
            );
            $item = $element->getElementsByTagName("*")->item(0);
            $node = $template->importNode($item, true);

            $childNodes = $xpath->query(
                sprintf(
                    "//*[@data-template-section='%s']",
                    $component->pivot->templateSection->identifier
                )
            );

            if ($childNodes->length) {
                $childNodes->item(0)->appendChild($node);
            } else {
                $template->appendChild($item);
            }
        }
        $response->html = $template->saveHTML();

        return new JsonResource((array) $response, 201);
    }
}
