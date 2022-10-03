<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Path;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_page_id" => ["required", "exists:cms_pages,id"],
            "path" => ["required", "max:255"],
        ];
    }
}
