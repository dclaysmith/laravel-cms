<?php

namespace Dclaysmith\LaravelCms\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class ComponentPage extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "cms_component_page";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "cms_page_id",
        "cms_component_id",
        "cms_template_section_id",
        "html",
        "view",
        "sort_order",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [];

    public function component()
    {
        return $this->belongsTo(
            \Dclaysmith\LaravelCms\Models\Component::class,
            "cms_component_id"
        );
    }

    public function page()
    {
        return $this->belongsTo(
            \Dclaysmith\LaravelCms\Models\Page::class,
            "cms_page_id"
        );
    }
}
