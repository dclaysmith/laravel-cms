<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TemplateControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-templates");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $response = $this->post("/api/cms-templates", [
            "name" => "donkey",
            "slug" => "donkey",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "name",
                "slug",
                "description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "slug" => "my-template",
            "description" => "About my template...",
        ]);

        $response = $this->put("/api/cms-templates/" . $existing->id, [
            "name" => "My Template New Name",
            "slug" => "my-template-new-slug",
            "description" => "More about my template...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "name",
                "slug",
                "description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "slug" => "my-template",
            "description" => "About my template...",
        ]);

        $response = $this->delete("/api/cms-templates/" . $existing->id);

        $response->assertStatus(200);
    }
}
