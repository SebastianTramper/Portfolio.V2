import Websites from './components/Websites';
import Skills from './components/Skills';
import Frontend from './components/Frontend';
import Illustrations from './components/Illustrations';
import LoadersAndAnimations from './components/LoadersAndAnimations';
import Wallpapers from './components/Wallpapers';
import Mascot from './components/Mascot';
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
            path: '/Illustrations',
            component: Illustrations,
            name: 'Illustrations'
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
            path: '/Mascot',
            component: Mascot,
            name: 'Mascot'
        },

        {
            path: '/typography',
            component: Typography,
            name: 'Typography'
        },
    ]
};