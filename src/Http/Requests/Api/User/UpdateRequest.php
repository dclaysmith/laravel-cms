<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["sometimes", "required", "max:255"],
            "title" => ["sometimes", "nullable"],
        ];
    }
}
