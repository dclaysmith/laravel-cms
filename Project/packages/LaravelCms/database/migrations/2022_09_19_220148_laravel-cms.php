<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Cms Media
         * - images, etc. uploaded to CMS
         */
        Schema::create("cms_media", function (Blueprint $table) {
            $table->id();
            $table->string("url");
            $table->string("caption");
            $table->timestamps();
        });

        /**
         * Cms Object
         * - Menus, etc.
         */
        Schema::create("cms_components", function (Blueprint $table) {
            $table->id();
            $table->string("body");
            $table->timestamps();
        });

        /**
         * Cms Page
         * - On save, add the current /path to the cms_pathes table.
         */
        Schema::create("cms_pages", function (Blueprint $table) {
            $table->id();
            $table
                ->foreignId("cms_template_id")
                ->nullable(true)
                ->default(null);
            $table->string("name");
            $table->string("title");
            $table->string("meta_keywords")->nullable(true);
            $table->string("meta_description")->nullable(true);
            $table->string("body")->nullable(true);
            $table->string("path");
            $table->boolean("allow_index")->default(true);
            $table->timestamps();

            $table->index("cms_template_id");
        });

        /**
         * Cms Page Object
         */
        Schema::create("cms_page_components", function (Blueprint $table) {
            $table->id();
            $table->foreignId("cms_page_id");
            $table->foreignId("cms_component_id");
            $table->foreignId("cms_template_section_id");
            $table->string("html")->nullable(true);
            $table->string("view")->nullable(true);
            $table->integer("sort_order")->nullable(true);
            $table->timestamps();

            $table->index("cms_page_id");
            $table->index("cms_component_id");
            $table->index("cms_template_section_id");
        });

        /**
         * Cms Paths
         * - Stores a history of any paths for a page. If matched will 30X redirect to current
         */
        Schema::create("cms_paths", function (Blueprint $table) {
            $table->id();
            $table->foreignId("cms_page_id");
            $table->string("path");
            $table->timestamps();

            $table->index("cms_page_id");
            $table->unique(["path"]);
        });

        /**
         * Cms Template Sections
         * - A section of a template that contains components
         */
        Schema::create("cms_template_sections", function (Blueprint $table) {
            $table->id();
            $table->foreignId("cms_template_id");
            $table->string("name");
            $table->string("slug");
            $table->string("description")->nullable(true);
            $table->timestamps();

            $table->index("cms_template_id");
        });

        /**
         * Cms Template
         * - A reusable page structure
         */
        Schema::create("cms_templates", function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug");
            $table->string("description")->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("cms_templates");
        Schema::dropIfExists("cms_template_sections");
        Schema::dropIfExists("cms_paths");
        Schema::dropIfExists("cms_components");
        Schema::dropIfExists("cms_page_components");
        Schema::dropIfExists("cms_pages");
        Schema::dropIfExists("cms_media");
    }
};
