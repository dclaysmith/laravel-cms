<?php

namespace Dclaysmith\LaravelCms\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Component extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "cms_components";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ["is_global", "html", "view", "name"];

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

    public function pages()
    {
        return $this->belongsToMany(
            \Dclaysmith\LaravelCms\Models\Page::class,
            "cms_component_page",
            "cms_component_id",
            "cms_page_id"
        )->withPivot("cms_template_section_id");
    }

    public function render($request)
    {
        if ($this->view) {
            $viewClass =
                "\\App\\View\\Components\\Vendor\\LaravelCms\\UserDefined\\" .
                str_replace(".php", "", $this->view);
            $view = new $viewClass($request);
            return $view->render();
        } else {
            return $this->html;
        }
    }
}
