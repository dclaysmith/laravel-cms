<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Template;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["sometimes", "required", "max:255"],
            "slug" => [
                "sometimes",
                "required",
                "max:255",
                "unique:cms_templates,slug," . $this->id,
            ],
            "description" => ["sometimes", "nullable"],
        ];
    }
}
