<template>
    <projectContent content_image="/images/vue_crud.png" github_link="https://github.com/SebastianTramper/Vue-js-crud" website_link="http://work.cf/Vue-js-crud/">
        Een CRUD gemaakt met VueJs, Axios en PHP. Met deze applicatie kun je leden toevoegen, uitlezen, updaten en verwijderen. Door middel van Axios kun je Ajax request maken.
    </projectContent>
</template>

<script>
    import projectContent from "./subcomponents/project-content";

    export default {
        name: "Vue_crud",
        components: {
            projectContent
        }
    }
</script>

<style scoped>

</style>
