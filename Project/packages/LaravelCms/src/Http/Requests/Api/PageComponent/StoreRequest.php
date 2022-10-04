<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\PageComponent;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_page_id" => ["required", "exists:cms_pages,id"],
            "cms_component_id" => ["required", "exists:cms_components,id"],
            "cms_template_section_id" => [
                "required",
                "exists:cms_template_sections,id",
            ],
            "body" => ["sometimes", "nullable"],
            "html" => ["sometimes", "nullable"],
            "sort_order" => ["sometimes", "integer"],
        ];
    }
}
