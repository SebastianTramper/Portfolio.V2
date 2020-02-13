<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Ervaring:
        </h1>
        <p class="mt-4 mb-4 p-4 bg-blue-300">
            Een beknopt overzicht van mijn skills. Dit geeft een indicatie van mijn interesses en waar ik momenteel op focus.
        </p>
        <h2 class="font-bold block mb-2 mt-12">Programmeer talen</h2>
        <skill v-bind:key='taal' v-bind:style="{ width: taal.procent,backgroundColor: taal.color}" v-for="taal in talen">{{taal.taal}}    {{taal.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Frameworks</h2>
        <skill v-bind:key='framework' v-bind:style="{ width: work.procent, backgroundColor: work.color}" v-for="work in framework">{{work.name}}    {{work.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Markeer talen / data formats</h2>
        <skill v-bind:key='markup' v-bind:style="{ width: mark.procent, backgroundColor: mark.color}" v-for="mark in markup">{{mark.name}}    {{mark.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Styling</h2>
        <skill v-bind:key='styling' v-bind:style="{ width: style.procent, backgroundColor: style.color}" v-for="style in styling">{{style.name}}    {{style.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Database</h2>
        <skill v-bind:key='database' v-bind:style="{ width: data.procent, backgroundColor: data.color}" v-for="data in database">{{data.name}}    {{data.procent}}</skill>

        <h2 class="font-bold block mb-2 mt-12">Tools en overige</h2>
        <skill v-bind:key='tools' v-bind:style="{ width: tool.procent, backgroundColor: tool.color}" v-for="tool in tools">{{tool.name}}   {{tool.procent}}</skill>

    </div>
</template>

<script>
    import skill from './subcomponents/skill';
export default {
    name: 'Skills',
    data(){
        return {
            talen: [
                {taal: "Php", procent: '85%', color: "#474A8A"},
                {taal: "Javascript", procent: '75%', color: "#F0DB4F"},
                {taal: "C#", procent: '60%', color: "#178600"},
                {taal: "Bash", procent: '40%', color: "#89e051"}
            ],

            framework: [
                {name: "laravel", procent: "75%",color: "#F05340" },
                {name: "VueJs", procent: "60%",color: "#41B883" },
                {name: "Asp.net", procent: "55%",color: "#0085C3" },
                {name: "jQuery", procent: "50%",color: "#0868AC" },
            ],

            markup: [
                {name: "HTML", procent: "100%",color: "#f16529" },
                {name: "JSON", procent: "85%",color: "#2d49ad" },
                {name: "XML", procent: "60%",color: "orange" },
            ],

            styling: [
                {name: "CSS", procent: "90%",color: "#ff8a27" },
                {name: "Sass", procent: "80%",color: "#c69" },
                {name: "Photoshop", procent: "65%",color: "cyan" },
            ],

            database: [
                {name: "Mysql", procent: "80%",color: "#F29111" },
                {name: "Sqlite", procent: "60%",color: "#00758F" },
            ],

            tools: [
                {name: "Git", procent: "85%",color: "#24292e" },
                {name: "Composer", procent: "70%",color: "#A0522D" },
                {name: "Npm", procent: "50%",color: "#CC3534" },
                {name: "Gulp", procent: "40%",color: "#DB4446" },
                {name: "Laravel mix", procent: "40%",color: "#F05340" },
                {name: "Webpack", procent: "30%",color: "#DB4446" },

            ],

        }
    },
    components: {
        skill
    }
}
</script>


