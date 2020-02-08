<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Ervaring:
        </h1>
        <p class="mt-4 mb-4 p-4 bg-blue-300">
            Een beknopt overzicht van mijn skills. Dit geeft een indicatie van mijn interesses en waar ik momenteel op focus. Het is goed om te vermelden dat ik geen expert ben in deze disciplines maar wel een leergierig student.
        </p>
        <h2 class="mb-2">{{ titel }}</h2>
        <skill v-bind:key='taal' v-for="taal in talen">{{taal.taal}}</skill>
    </div>
</template>

<script>
    import skill from './subcomponents/skill';
export default {
    name: 'Skills',
    data(){
        return {
            titel: 'Programmeer talen',
            talen: [
                {taal: "Javascript", procent: '70%'},
                {taal: "Php", procent: '80%'},
                {taal: "Bash", procent: '40%'},
            ]
        }
    },
    components: {
        skill
    }
}
</script>

// skills

// programmeer talen:
// Javascript
// Php
// Bash

// markup talen:
// HTML 
// XML
// JSON

// Frameworks / libaries:
// Laravel
// Vue
// jqeury (Als het nodig is)
// Tailwindcss


// Styling:
// CSS
// Sass/scss
// Photoshop

// Database:
// mysql
// sqlite

// Tools:
// git / github
// npm
// composer
// gulp 
// webpack
// laravel mix


