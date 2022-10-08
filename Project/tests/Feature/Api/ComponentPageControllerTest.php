<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class ComponentPageControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-component-page");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $template = \Dclaysmith\LaravelCms\Models\Template::create([
            "name" => "My Template",
            "slug" => "my-template",
            "description" => "About my template...",
        ]);

        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $component = \Dclaysmith\LaravelCms\Models\Component::create([
            "body" => "Boy...",
        ]);

        $templateSection = \Dclaysmith\LaravelCms\Models\TemplateSection::create(
            [
                "cms_template_id" => $template->id,
                "name" => "My Template",
                "slug" => "my-template",
                "description" => "About my template...",
            ]
        );

        $response = $this->post("/api/cms-component-page", [
            "cms_page_id" => $page->id,
            "cms_component_id" => $component->id,
            "cms_template_section_id" => $templateSection->id,
            "html" => "html...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_page_id",
                "cms_component_id",
                "cms_template_section_id",
                "html",
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
            "slug" => "my-template",
            "description" => "About my template...",
        ]);

        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $component = \Dclaysmith\LaravelCms\Models\Component::create([
            "body" => "Boy...",
        ]);

        $templateSection = \Dclaysmith\LaravelCms\Models\TemplateSection::create(
            [
                "cms_template_id" => $template->id,
                "name" => "My Template",
                "slug" => "my-template",
                "description" => "About my template...",
            ]
        );

        $existing = \Dclaysmith\LaravelCms\Models\ComponentPage::create([
            "cms_page_id" => $page->id,
            "cms_component_id" => $component->id,
            "cms_template_section_id" => $templateSection->id,
            "html" => "html...",
        ]);

        $response = $this->put("/api/cms-component-page/" . $existing->id, [
            "html" => "new html...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => [
                "id",
                "cms_page_id",
                "cms_component_id",
                "cms_template_section_id",
                "html",
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
            "slug" => "my-template",
            "description" => "About my template...",
        ]);

        $page = \Dclaysmith\LaravelCms\Models\Page::create([
            "cms_template_id" => $template->id,
            "name" => "My Page",
            "title" => "My Title",
            "meta_keywords" => "keywords..",
            "meta_description" => "description..",
            "path" => "/path",
        ]);

        $component = \Dclaysmith\LaravelCms\Models\Component::create([
            "body" => "Boy...",
        ]);

        $templateSection = \Dclaysmith\LaravelCms\Models\TemplateSection::create(
            [
                "cms_template_id" => $template->id,
                "name" => "My Template",
                "slug" => "my-template",
                "description" => "About my template...",
            ]
        );

        $existing = \Dclaysmith\LaravelCms\Models\ComponentPage::create([
            "cms_page_id" => $page->id,
            "cms_component_id" => $component->id,
            "cms_template_section_id" => $templateSection->id,
            "html" => "html...",
        ]);

        $response = $this->delete("/api/cms-component-page/" . $existing->id);

        $response->assertStatus(200);
    }
}
