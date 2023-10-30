<?php

namespace Dclaysmith\LaravelCms\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Page extends Model
{
    use HasFactory;

    /**
     * The "booted" method of the model.
     */
    protected static function booted(): void
    {
        static::saved(function (Page $page) {
            $dirty = $page->getDirty();
            if (array_key_exists("path", $dirty)) {
                \Dclaysmith\LaravelCms\Models\Path::firstOrCreate([
                    "cms_page_id" => $page->id,
                    "path" => $page->path,
                ]);
            }
        });
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "cms_pages";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        "name",
        "title",
        "meta_keywords",
        "meta_description",
        "path",
        "allow_index",
        "cms_template_id",
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

    public function template()
    {
        return $this->belongsTo(
            \Dclaysmith\LaravelCms\Models\Template::class,
            "cms_template_id"
        );
    }

    public function components()
    {
        return $this->belongsToMany(
            \Dclaysmith\LaravelCms\Models\Component::class,
            "cms_component_page",
            "cms_page_id",
            "cms_component_id"
        )
            ->using(\Dclaysmith\LaravelCms\Models\ComponentPage::class)
            ->orderByPivot("sort_order")
            ->withPivot("cms_template_section_id");
    }

    public static function findByPath($path)
    {
        return \Dclaysmith\LaravelCms\Models\Page::join(
            "cms_paths",
            "cms_page_id",
            "=",
            "cms_pages.id"
        )
            ->where("cms_paths.path", "=", $path)
            ->select("cms_pages.*")
            ->with("components")
            ->first();
    }
}
