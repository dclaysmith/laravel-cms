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
    public function store(StoreRequest $request, $cmsPageId)
    {
        // $view1 = new \App\View\Vendor\LaravelCms\Client\ExampleOne($request);
        // $view2 = new \App\View\Vendor\LaravelCms\Client\ExampleTwo($request);

        // dd($view2->render());

        $page = Page::findOrFail($cmsPageId);

        $components = $page->components;

        $template = $page->template;

        $response = new \stdClass();

        // Page attributes
        $response->name = $page->name;
        $response->title = $page->title;
        $response->meta_keywords = $page->meta_keywords;
        $response->meta_description = $page->meta_description;
        $response->path = $page->path;
        $response->allow_index = $page->allow_index;

        // Assemble the sections, we'll add the rendered HTML below
        $sections = [];
        foreach ($template->templateSections as $templateSection) {
            $section = new \stdClass();
            $section->id = $templateSection->id;
            $section->name = $templateSection->name;
            $section->identifier = $templateSection->identifier;
            $section->description = $templateSection->description;
            $section->html = "";
            $sections[] = (array) $section;
        }

        // Render the components
        foreach ($components as $component) {
            $index = array_search(
                $component->pivot->cms_template_section_id,
                array_column($sections, "id")
            );
            if (false !== $index) {
                $sections[$index]["html"] .= $component->render($request);
            }
        }
        $response->template_sections = $sections;

        return new JsonResource((array) $response, 201);
    }
}
