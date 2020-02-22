<template>
    <div>
       <section class="allProject bg-gray-200 p-4">
           <project title="Food blog / CMS" imageUrl="/images/uniekegerechten1.png" projectUrl="/food_blog">
               <img src="/images/talen/html-5.svg" alt="">
               <img src="/images/talen/javascript.svg" alt="">
               <img src="/images/talen/laravel.svg" alt="">
               <img src="/images/talen/mysql.svg" alt="">
               <img src="/images/talen/sass.png" alt="">

           </project>
           <project title="Data visualisatie" imageUrl="/images/data.png" projectUrl="/data_visualisatie">
               <img src="/images/talen/json.png" alt="">
               <img src="/images/talen/html-5.svg" alt="">
               <img src="/images/talen/javascript.svg" alt="">
               <img src="/images/talen/svg.png" alt="">

           </project>
           <project title="Vuejs / Axios CRUD" imageUrl="/images/vue1.png" projectUrl="/vue_crud">
               <img src="/images/talen/html-5.svg" alt="">
               <img src="/images/talen/vue-9.svg" alt="">
               <img src="/images/talen/axios.png" alt="">
               <img src="/images/talen/php.png" alt="">
               <img src="/images/talen/mysql.svg" alt="">

           </project>
           <project title="Reservering ouderavond" imageUrl="/images/ouderavond.png" projectUrl="/ouderavond">
               <img src="/images/talen/php.png" alt="">
               <img src="/images/talen/mysql.svg" alt="">
               <img src="/images/talen/html-5.svg" alt="">
               <img src="/images/talen/jquery.png" alt="">
               <img src="/images/talen/sass.png" alt="">
           </project>
           <project title="Kapsters aan huis" imageUrl="/images/kapster.png" projectUrl="/kapsters">
               <img src="/images/talen/html-5.svg" alt="">
               <img src="/images/talen/css-5.svg" alt="">
               <img src="/images/talen/javascript.svg" alt="">
           </project>
       </section>
    </div>
</template>

<script>

import project from './subcomponents/project';
export default {
    components: {
        project
    }
}
</script>
