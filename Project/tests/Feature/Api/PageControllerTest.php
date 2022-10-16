<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PageControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-pages");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $template = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $response = $this->post("/api/cms-pages", [
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_template_id",
                "name",
                "title",
                "meta_keywords",
                "meta_description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $template = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\Page::create([
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $response = $this->put("/api/cms-pages/" . $existing->id, [
            "cms_template_id" => $template->id,
            "name" => "My Page 2",
            "title" => "My Title 2",
            "meta_keywords" => "keywords 2..",
            "meta_description" => "description 2..",
            "path" => "/path2",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_template_id",
                "name",
                "title",
                "meta_keywords",
                "meta_description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $template = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\Page::create([
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $response = $this->delete("/api/cms-pages/" . $existing->id);

        $response->assertStatus(200);
    }
}
