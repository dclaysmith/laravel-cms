<?php

namespace Dclaysmith\LaravelCms\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Component extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "cms_components";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ["is_global", "html", "view", "name"];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [];

    public function pages()
    {
        return $this->belongsToMany(
            \Dclaysmith\LaravelCms\Models\Page::class,
            "cms_component_page",
            "cms_component_id",
            "cms_page_id"
        )->withPivot("cms_template_section_id");
    }

    public function render($page, $request)
    {
        if ($this->view) {
            $viewClass =
                "\\App\\View\\Components\\Vendor\\LaravelCms\\UserDefined\\" .
                str_replace(".php", "", $this->view);
            $view = new $viewClass($request);
            return $view->render();
        } else {
            $html = $this->html;

            /**
             * Replace data-value="title" with page values
             */
            $element = new \DOMDocument();
            $element->loadHTML(
                $html,
                LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD | LIBXML_NOERROR
            );
            $xpath = new \DOMXpath($element);
            $childNodes = $xpath->query("//*[@data-value]");
            if (count($childNodes) > 0) {
                foreach ($childNodes as $childNode) {
                    $attribute = $childNode->getAttribute("data-value");
                    $childNode->nodeValue = data_get($page, $attribute);
                }
            }

            return $element->saveHTML();
        }
    }
}
