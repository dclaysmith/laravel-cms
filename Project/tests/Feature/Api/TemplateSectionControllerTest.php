<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TemplateSectionControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-template-sections");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $existingTemplate = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $response = $this->post("/api/cms-template-sections", [
            "cms_template_id" => $existingTemplate->id,
            "name" => "donkey",
            "identifier" => "donkey",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_template_id",
                "name",
                "identifier",
                "description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $existingTemplate = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\TemplateSection::create([
            "cms_template_id" => $existingTemplate->id,
            "name" => "My Template Section",
            "identifier" => "my-template-section",
            "description" => "About my template section...",
        ]);

        $response = $this->put("/api/cms-template-sections/" . $existing->id, [
            "name" => "My Template Section New Name",
            "identifier" => "my-template-section-new-identifier",
            "description" => "More about my template section...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_template_id",
                "name",
                "identifier",
                "description",
                "created_at",
                "updated_at",
            ],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $existingTemplate = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "identifier" => "my-template",
            "description" => "About my template...",
        ]);

        $existing = \Dclaysmith\LaravelCms\Models\TemplateSection::create([
            "cms_template_id" => $existingTemplate->id,
            "name" => "My Template Section",
            "identifier" => "my-template-section",
            "description" => "About my template section...",
        ]);

        $response = $this->delete(
            "/api/cms-template-sections/" . $existing->id
        );

        $response->assertStatus(200);
    }
}
