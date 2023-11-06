<?php

namespace Dclaysmith\LaravelCms\Http\Requests\Api\Page;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "cms_template_id" => [
                "sometimes",
                "nullable",
                "exists:cms_templates,id",
            ],
            "name" => ["sometimes", "required", "max:255"],
            "title" => ["sometimes", "required", "max:255"],
            "meta_keywords" => ["sometimes", "nullable", "max:255"],
            "meta_description" => ["sometimes", "nullable", "max:1000"],
            "body" => ["sometimes", "nullable"],
            "path" => ["sometimes", "max:255"],
            "allow_index" => ["sometimes", "boolean"],
            "cms_template_id" => [
                "sometimes",
                "nullable",
                "exists:cms_templates,id",
            ],
            "cms_user_id" => ["sometimes", "nullable", "exists:cms_users,id"],
        ];
    }
}
