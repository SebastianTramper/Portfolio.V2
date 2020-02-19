<template>
    <projectContent content_image="/images/ouderavond.png" github_link="https://github.com/MichelZuidema/Reserveringssite-Ouderavond" website_link="http://work.cf/Reserveringssite-Ouderavond/">
        Een project gemaakt in mijn eerste jaar samen met een medestudent hebben wij een reserverings website gemaakt voor ouderavonden op school. Met dit systeem kunnen ouders ingeschreven door middel van een unieke link met een token (Die wordt vergeleken in de database). De ouder kan dan een aanvraag doen er krijgt een mail zodra de mentor het heeft bevestig. We hebben in de project gebruik gemaakt van: HTML, SCSS, PHP en SQL.
    </projectContent>

</template>

<script>
    import projectContent from "./subcomponents/project-content";

    export default {
        name: "Ouderavond",
        components: {
            projectContent
        }
    }
</script>

<style scoped>

</style>
