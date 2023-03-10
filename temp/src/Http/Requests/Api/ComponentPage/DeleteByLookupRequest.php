<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\ComponentPage;

use Illuminate\Foundation\Http\FormRequest;

class DeleteByLookupRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_page_id" => ["required", "exists:cms_pages,id"],
            "cms_component_id" => ["required", "exists:cms_components,id"],
        ];
    }
}
