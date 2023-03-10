How to work on UI.

The /Project is just a base Laravel installation.

The real package is in /packages/LaravelCms

But you need to run the Laravel App first

# Run Laravel App (LaravelCms/Project)

cd /public
php -S localhost:8000
or
cd /
php artisan serve --host=localhost --port=8000

## Run Frontend / Vite HMR

cd Project/
npm run dev

# Deploy the Laravel Package (the api stuff)./deploy.sh

Updates the composer-installed package in the test project and publishes artifacts

## Open

http://localhost:8000/admin-dev#/templates

# Development

You can now work on the admin in

/Project/packages/LaravelCms/resources/admin/src

Work in LaravelCms/Project/packages/LaravelCms

# Develop on the admin site...

> Project/packages/LaravelCms/resources/admin

# Build

> Project/packages/LaravelCms/.deploy

# BoardMinutesHq/v1/

> composer update (get latest changes)
> php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"

> BoardMeetingsHQ/v1/nova-components/NovaAdminTool/resources/js/pages/Tool.vue

The BoardMeetings http://localhost:8082/nova/nova-admin-tool#/pages/1

#####

composer update;

rm -rf resources/js/vendor/laravel-cms/admin;

php artisan vendor:publish --provider="Dclaysmith\LaravelCms\Providers\LaravelCmsServiceProvider"

./deploy
