<template>
    <projectContent content_image="/images/work2.png" github_link="https://github.com/SebastianTramper/work" website_link="http://work.cf/work/">
        Dit is een fake socialmedia applicatie voor ondernemers. Je kunt hier inloggen, registeren, diensten en projecten toevoegen en de feed bekijken. We kregen voor dit project maar 12 uur de tijd en is dus werkend maar niet prefect desondanks hebben wel veel geleerd van PHP en SQL.     </projectContent>
</template>

<script>
    import projectContent from "./subcomponents/project-content";

    export default {
        name: "Social_media",
        components: {
            projectContent
        }
    }
</script>

<style scoped>

</style>
