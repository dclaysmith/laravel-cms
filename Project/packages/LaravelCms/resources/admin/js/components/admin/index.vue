<template>
    <div class="cms-container">
        <div class="cms-menu"><admin-menu></admin-menu></div>
        <div class="cms-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AdminMenu from "./menu/index.vue";

export default {
    name: "LaravelCmsAdmin",
    components: {
        AdminMenu: AdminMenu,
    },
};
</script>

<style>
.cms-container {
    display: flex;
}
.cms-menu {
    flex: 1;
    padding: 2em;
}
.cms-menu ul {
    margin: 0px;
}
.cms-content {
    flex: 4;
    padding: 2em;
}
</style>