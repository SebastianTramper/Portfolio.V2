<template>
    <article class="aProjectContainerHeader">
        <h1>{{ title }}</h1>

        <a v-bind:href=" projectUrl " class="aProjectContainer">
            <div class="aProject"  v-bind:style="{ background: 'url(' + imageUrl + ') center/cover'}"></div>
        </a>
        <div class="used_lang">
            <slot></slot>
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
            'talenUrl'
        ]
    }
</script>

<style scoped>

</style>
