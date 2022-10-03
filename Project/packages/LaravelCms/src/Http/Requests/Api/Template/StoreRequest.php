<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Template;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["required", "max:255"],
            "slug" => ["required", "max:255"],
            "description" => ["sometimes", "nullable"],
        ];
    }
}
