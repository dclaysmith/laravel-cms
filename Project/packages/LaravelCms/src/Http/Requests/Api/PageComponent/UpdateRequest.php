<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\PageComponent;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_page_id" => ["sometimes", "required", "exists:cms_pages,id"],
            "cms_component_id" => [
                "sometimes",
                "required",
                "exists:cms_components,id",
            ],
            "cms_template_section_id" => [
                "sometimes",
                "required",
                "exists:cms_template_sections,id",
            ],
            "body" => ["sometimes", "nullable"],
            "html" => ["sometimes", "nullable"],
            "sort_order" => ["sometimes", "integer"],
        ];
    }
}
