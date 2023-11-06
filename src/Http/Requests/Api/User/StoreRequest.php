<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["required", "max:255"],
            "title" => ["sometimes", "nullable"],
        ];
    }
}
