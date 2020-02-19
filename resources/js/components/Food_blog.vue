<template>
    <projectContent content_image="/images/uniekegerechten.png" github_link="https://github.com/SebastianTramper/uniekegerechten" website_link="https://uniekegerechten.nl/">
        Een food blog met verschillende categorieën recepten. De site eigenaar kan zelf recepten toe voegen. Dit project is gemaakt met het framework Laravel. Ook heb ik gebruik gemaakt van Laravel/ui package voor user authenticatie. Voor het CMS heb ik gebruik gemaakt van het eloquent ORM. Deze website is ook echt in gebruik en er worden weekelijks nieuwe recepten op geplaats.
    </projectContent>
</template>

<script>
    import projectContent from './subcomponents/project-content';

    export default {
    components: {
        projectContent
}
}
</script>
