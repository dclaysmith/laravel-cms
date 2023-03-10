<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\TemplateSection;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["sometimes", "required", "max:255"],
            "identifier" => [
                "sometimes",
                "required",
                "max:255",
                "unique:cms_template_sections,identifier," . $this->id,
            ],
            "description" => ["sometimes", "nullable"],
        ];
    }
}
