<template>
    <projectContent content_image="/images/ouderavond.png" github_link="https://github.com/MichelZuidema/Reserveringssite-Ouderavond" website_link="http://work.cf/Reserveringssite-Ouderavond/">
        Een project gemaakt in mijn eerste jaar. Samen met een medestudent hebben wij een reserverings website gemaakt voor ouderavonden op school. Met dit systeem kunnen ouders inschrijven door middel van een unieke link met een token (die wordt vergeleken in de database). Zodra te aanvraag goed is gekeurd krijgt de ouder een bevestigingsmail.
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
