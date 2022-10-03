<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Path;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [            
            "path" => ["required", "max:255"],
        ];
    }
}
