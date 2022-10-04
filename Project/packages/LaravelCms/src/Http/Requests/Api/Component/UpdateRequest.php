<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Component;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "body" => ["sometimes"],
        ];
    }
}
