<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Media;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "url" => ["required", "max:255"],
            "caption" => ["sometimes", "nullable"],
        ];
    }
}
