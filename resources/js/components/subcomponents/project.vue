<template>
    <article class="aProjectContainerHeader">
        <h1>{{ title }}</h1>

        <a v-bind:href=" projectUrl " class="aProjectContainer">
            <div class="aProject"  v-bind:style="{ background: 'url(' + imageUrl + ') center/cover'}"></div>
        </a>
        <div class="used_lang">
            <img src="/images/talen/php.png" alt="">
            <img src="/images/talen/html-5.svg" alt="">
            <img src="/images/talen/javascript.svg" alt="">
            <img src="/images/talen/laravel.svg" alt="">
            <img src="/images/talen/mysql.svg" alt="">
            <img src="/images/talen/axios.png" alt="">
        </div>
    </article>
</template>

<script>
    export default {
        name: "project",
        props: [
            'title',
            'imageUrl',
            'projectUrl',
        ]
    }
</script>

<style scoped>

</style>
