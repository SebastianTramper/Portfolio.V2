<template>
    <article class="aProjectContainerHeader">
        <h1>{{ title }}</h1>

        <a v-bind:href=" projectUrl "  target="_blank" class="aProjectContainer">
            <div class="aProject"  v-bind:style="{ background: 'url(' + imageUrl + ') center/cover'}"></div>
        </a>
    </article>
</template>

<script>
    export default {
        name: "project",
        props: ['title','imageUrl','projectUrl']
    }
</script>

<style scoped>

</style>
