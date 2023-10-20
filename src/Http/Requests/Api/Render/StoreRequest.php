<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Render;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_page_id" => ["integer", "required_without:path"],
            "path" => ["required_without:cms_page_id"],
        ];
    }
}
