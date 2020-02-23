import Websites from './components/Websites';
import Skills from './components/Skills';
import Food_blog from './components/Food_blog';
import CV from './components/CV';
import Contact from './components/Contact';
import About from './components/About';
import Data_visualisatie from './components/Data_visualisatie';
import Vue_crud from './components/Vue_crud';
import Ouderavond from './components/Ouderavond';
import Kapsters from './components/Kapsters';
import notFound from './components/notFound';


export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [

        {
            path: '*',
            component: notFound
        },

        {
            path: '/websites',
            component: Websites,
            name: 'Websites'
        },

        {
            path: '/skills',
            component: Skills,
            name: 'Skills'
        },

        {
            path: '/food_blog',
            component: Food_blog,
            name: 'Food_blog'
        },

        {
            path: '/cv',
            component: CV,
            name: 'CV'
        },

        {
            path: '/contact',
            component: Contact,
            name: 'Contact'
        },

        {
            path: '/',
            component: About,
            name: 'About'
        },

        {
            path: '/vue_crud',
            component: Vue_crud,
            name: 'Vue_crud'
        },

        {
            path: '/data_visualisatie',
            component: Data_visualisatie,
            name: 'Data_visualisatie'
        },
        {
            path: '/ouderavond',
            component: Ouderavond,
            name: 'Ouderavond'
        },
        {
            path: '/kapsters',
            component: Kapsters,
            name: 'Kapsters'
        },
    ]
};
