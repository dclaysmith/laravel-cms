<?php

namespace Tests\Feature\Api;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PathControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-paths");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "name" => "My Page",
            "title" => "My Title",
            "path" => "My Path",
        ]);

        $response = $this->post("/api/cms-paths", [
            "cms_page_id" => $page->id,
            "path" => "/some-path",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "cms_page_id", "path", "created_at", "updated_at"],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "name" => "My Page",
            "title" => "My Title",
            "path" => "My Path",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\Path::create([
            "cms_page_id" => $page->id,
            "path" => "/path",
        ]);

        $response = $this->put("/api/cms-paths/" . $existing->id, [
            "path" => "/some-different",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "cms_page_id", "path", "created_at", "updated_at"],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "name" => "My Page",
            "title" => "My Title",
            "path" => "My Path",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\Path::create([
            "cms_page_id" => $page->id,
            "path" => "/path",
        ]);

        $response = $this->delete("/api/cms-paths/" . $existing->id);

        $response->assertStatus(200);
    }
}
