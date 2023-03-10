<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Component;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "is_global" => ["sometimes", "boolean"],
            "name" => ["sometimes", "required", "max:255"],
            "html" => ["sometimes", "required_without:view"],
            "view" => ["sometimes", "required_without:html"],

            /** Adding to Page Component **/
            "cms_page_id" => ["sometimes", "exists:cms_pages,id"],
            "cms_template_section_id" => [
                "sometimes",
                "exists:cms_template_sections,id",
            ],
        ];
    }
}
