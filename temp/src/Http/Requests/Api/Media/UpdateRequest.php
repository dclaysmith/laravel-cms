<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Media;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "url" => ["sometimes", "required", "max:255"],
            "caption" => ["sometimes", "nullable"],
        ];
    }
}
