<?php

namespace Dclaysmith\LaravelCms\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Page extends Model
{
    use HasFactory;

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

    // public function components()
    // {
    //     return $this->belongsTo(
    //         \Dclaysmith\LaravelCms\Models\ComponentPage::class,
    //         "cms_template_id"
    //     );
    // }
}
