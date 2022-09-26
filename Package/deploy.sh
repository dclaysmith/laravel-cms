#!/bin/bash
echo "Run Build"
npm run build
echo "cd ../Project"
cd ../Project
echo "Update Project"
# composer update; 
rm -rf public/vendor/laravel-cms; php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"
echo "cd ../Package"
cd ../Package