<?php

namespace Tests\Feature\Api;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MediaControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndex()
    {
        $response = $this->get("/api/cms-media");

        $response->assertStatus(200);
    }

    public function testStore()
    {
        $response = $this->post("/api/cms-media", [
            "url" => "test.jpg",
            "caption" => "A caption...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "url", "caption", "created_at", "updated_at"],
        ]);

        $response->assertStatus(201);
    }
    public function testUpdate()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Media::create([
            "url" => "test.jpg",
            "caption" => "A caption...",
        ]);

        $response = $this->put("/api/cms-media/" . $existing->id, [
            "url" => "test-new.jpg",
            "caption" => "A new caption...",
        ]);

        $responseArray = (array) json_decode($response->content());

        $response->assertJsonStructure([
            "data" => ["id", "url", "caption", "created_at", "updated_at"],
        ]);

        $response->assertStatus(200);
    }

    public function testDelete()
    {
        $existing = \Dclaysmith\LaravelCms\Models\Media::create([
            "url" => "test.jpg",
            "caption" => "A caption...",
        ]);

        $response = $this->delete("/api/cms-media/" . $existing->id);

        $response->assertStatus(200);
    }
}
