<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sebastian Tramper</title>
        <!-- Fonts -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/app.css">
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="relative">
        <div id="app">
            <nav-menu></nav-menu>
            <section class="container bg-white">
                <header class="py-2 mb-16" style="background-color: #36558F!important;">
                    <section class="px-8 text-4xl flex align-items-center">
                        <div class="mt-6 mb-4 w-20">
                            <img src="/images/profiel.jpg" alt="" class="avatar rounded-full">
                        </div>
                        <h1 class="header-title text-white ml-8 self-center justify-center">
                            Sebastian Tramper
                        </h1>
                    </section>
                </header>
                <main class="flex px-8 pb-32">
                    <aside class="w-64 hidden lg:block aside">
                        <section class="mb-8">
                            <h5 class="uppercase font-bold mb-4">Informatie</h5>
                            <ul>
                                <li class="pb-2"><router-link :to="{ name: 'About' }">Over mij</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'CV' }">Curriculum vitae</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Skills' }">Skills</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
                            </ul>
                        </section>
                        <section class="mb-16">
                            <h5 class="uppercase font-bold mb-4">Projecten</h5>
                            <ul>
                                <li class="pb-2" v-on:click="randomColors"><router-link to="/" exact>Alle projecten</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Food_blog' }">Food blog</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Data_visualisatie' }">Data visualisatie</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Vue_crud' }">Vue / Axios crud</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Ouderavond' }">Reservering ouderavond</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Social_media' }">Fake Social media</router-link></li>
                                <li class="pb-2"><router-link :to="{ name: 'Kapsters' }">Kapsters aan huis</router-link></li>
                            </ul>
                        </section>

                        <section class="mb-16 settings">
                            <h5 class="uppercase font-bold mb-4">Settings</h5>
                            <ul>
                                <li class="pb-2"  v-on:click="fontIncrement">larger font</li>
                                <li class="pb-2"  v-on:click="fontDecrement">Smaller font</li>
                            </ul>
                        </section>
                    </aside>
                    <div class="primary flex-1">
                        <router-view></router-view>
                    </div>

                </main>
                <footer class="p-4 flex items-center justify-between w-full absolute bottom-0 inset-x-0 px-8" style="background: #EF6F6C!important;">
                    <p class="text-white font-bold">VueJs | Laravel | Single page application<p>
                    <ul class="leading-none">
                        <li class="inline-block px-2"><a href="mailto:83488@glr.nl"><img src="/images/mail.png" alt=""></a></li>
                        <li class="inline-block px-2"><a href="https://www.linkedin.com/in/sebastian-tramper-91525a12a/"><img src="/images/linkedin.png" alt=""></a></li>
                        <li class="inline-block px-2"><a href="https://github.com/SebastianTramper"><img src="/images/github.png" alt=""></a></li>
                    </ul>
                </footer>
            </section>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
