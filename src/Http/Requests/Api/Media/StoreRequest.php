<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Media;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "media" => ["required"],
            "caption" => ["sometimes", "nullable"],
        ];
    }
}
