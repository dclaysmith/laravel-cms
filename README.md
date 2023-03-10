composer update;

rm -rf resources/js/components/laravel-cms/admin;

php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"

./deploy
