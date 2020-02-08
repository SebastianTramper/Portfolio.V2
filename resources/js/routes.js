import Websites from './components/Websites';
import Skills from './components/Skills';
import Frontend from './components/Frontend';
import CV from './components/CV';
import LoadersAndAnimations from './components/LoadersAndAnimations';
import Wallpapers from './components/Wallpapers';
import About from './components/About';
import Typography from './components/Typography';
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
            path: '/',
            component: Websites
        },

        {
            path: '/skills',
            component: Skills,
            name: 'Skills'
        },

        {
            path: '/front-end',
            component: Frontend,
            name: 'Frontend'
        },

        {
            path: '/cv',
            component: CV,
            name: 'CV'
        },

        {
            path: '/loaders-Animations',
            component: LoadersAndAnimations,
            name: 'LoadersAndAnimations'
        },

        {
            path: '/wallpapers',
            component: Wallpapers,
            name: 'Wallpapers'
        },

        {
            path: '/about',
            component: About,
            name: 'About'
        },

        {
            path: '/typography',
            component: Typography,
            name: 'Typography'
        },
    ]
};
