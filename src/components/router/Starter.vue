<template>
    <div id="starter">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "starter"
    }
</script>

<style lang="stylus">

</style>