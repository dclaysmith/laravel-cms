<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Component;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "body" => ["sometimes"],
        ];
    }
}
