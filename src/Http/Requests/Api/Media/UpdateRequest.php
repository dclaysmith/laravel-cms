<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Media;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "caption" => ["sometimes", "nullable"],
        ];
    }
}
