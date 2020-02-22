<template>
    <div>
        <p class="mb-6 p-4 font-bold " style="background-color: rgb(239, 111, 108);">
            Een overzicht van de technieken waarmee ik werk.<br>  De percentages geven mijn vaardigheden en interesses weer.
        </p>
        <h2 class="font-bold block mb-2">Programmeer talen</h2>
        <skill v-bind:key='taal' v-bind:style="{ width: taal.procent,backgroundColor: taal.color}" v-for="taal in talen">{{taal.taal}}    {{taal.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Frameworks</h2>
        <skill v-bind:key='framework' v-bind:style="{ width: work.procent, backgroundColor: work.color}" v-for="work in framework">{{work.name}}    {{work.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Markeer talen / data formats</h2>
        <skill v-bind:key='markup' v-bind:style="{ width: mark.procent, backgroundColor: mark.color}" v-for="mark in markup">{{mark.name}}    {{mark.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Styling</h2>
        <skill v-bind:key='styling' v-bind:style="{ width: style.procent, backgroundColor: style.color}" v-for="style in styling">{{style.name}}    {{style.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Database</h2>
        <skill v-bind:key='database' v-bind:style="{ width: data.procent, backgroundColor: data.color}" v-for="data in database">{{data.name}}    {{data.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Tools</h2>
        <skill v-bind:key='tools' v-bind:style="{ width: tool.procent, backgroundColor: tool.color}" v-for="tool in tools">{{tool.name}}   {{tool.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Overige</h2>
        <skill v-bind:key='Overige' v-bind:style="{ width: overig.procent, backgroundColor: overig.color}" v-for="overig in Overige">{{overig.name}}   {{overig.procent}}</skill>

    </div>
</template>

<script>
    import skill from './subcomponents/skill';
export default {
    name: 'Skills',
    data(){
        return {
            talen: [
                {taal: "Php", procent: '90%', color: "#474A8A"},
                {taal: "Javascript", procent: '80%', color: "#F0DB4F"},
                {taal: "C#", procent: '70%', color: "#178600"},
                {taal: "Bash", procent: '50%', color: "#89e051"}
            ],

            framework: [
                {name: "laravel", procent: "85%",color: "#F05340" },
                {name: "VueJs", procent: "70%",color: "#41B883" },
                {name: "jQuery", procent: "60%",color: "#0868AC" },
                {name: "Wordpress", procent: "50%",color: "#444140 " },
                {name: "Asp.net", procent: "30%",color: "#0085C3" },
            ],

            markup: [
                {name: "HTML", procent: "90%",color: "#f16529" },
                {name: "JSON", procent: "80%",color: "#2d49ad" },
                {name: "XML", procent: "60%",color: "orange" },
            ],

            styling: [
                {name: "CSS", procent: "90%",color: "#ff8a27" },
                {name: "Sass", procent: "80%",color: "#c69" },
                {name: "Photoshop", procent: "60%",color: "cyan" },
            ],

            database: [
                {name: "Mysql", procent: "80%",color: "#F29111" },
                {name: "Sqlite", procent: "60%",color: "#00758F" },
            ],

            tools: [
                {name: "Git", procent: "80%",color: "#24292e" },
                {name: "Composer", procent: "70%",color: "#A0522D" },
                {name: "Npm", procent: "60%",color: "#CC3534" },
                {name: "Gulp", procent: "50%",color: "#DB4446" },
                {name: "Laravel mix", procent: "40%",color: "#F05340" },
                {name: "Webpack", procent: "30%",color: "#DB4446" },
            ],

            Overige: [
                {name: "Linux commandline", procent: "80%",color: "#dd4814 " },
                {name: "Webservers (Digitalocean)", procent: "70%",color: "blue" },
            ],
        }
    },
    components: {
        skill
    }
}
</script>


