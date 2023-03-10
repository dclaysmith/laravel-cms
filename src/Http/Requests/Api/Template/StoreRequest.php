<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Template;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["required", "max:255"],
            "identifier" => [
                "required",
                "max:255",
                "unique:cms_templates,identifier",
            ],
            "description" => ["sometimes", "nullable"],
        ];
    }
}
