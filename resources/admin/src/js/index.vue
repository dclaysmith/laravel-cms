<template>
    <notifications />
    <div class="cms-container">
        <div class="cms-menu"><admin-menu></admin-menu></div>
        <div class="cms-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AdminMenu from "./components/menu/index.vue";

export default {
    name: "LaravelCmsAdminVueComponent",
    components: {
        AdminMenu: AdminMenu,
    },
};
</script>

<style lang="scss">
.cms-container {
    display: flex;
}
.cms-menu {
    flex: 2;
    padding: 2em;
}
.cms-menu ul {
    margin: 0px;
}
.cms-content {
    flex: 8;
    padding: 2em;
}

.ProseMirror {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    background-image: none;
    border: 0.05rem solid #bcc3ce;
    border-radius: 0.1rem;
    color: #3b4351;
    display: block;
    font-size: 0.8rem;
    line-height: 1.2rem;
    max-width: 100%;
    outline: 0;
    padding: 0.25rem 0.4rem;
    position: relative;
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
    width: 100%;
}
</style>