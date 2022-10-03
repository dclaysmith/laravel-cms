<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\TemplateSection;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_template_id" => ["required", "exists:cms_templates,id"],
            "name" => ["required", "max:255"],
            "slug" => ["required", "max:255"],
            "description" => ["sometimes", "nullable"],
        ];
    }
}
