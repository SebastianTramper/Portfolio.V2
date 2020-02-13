<template>
    <div>
       <section class="allProject bg-gray-200 p-4">
           <project title="Food blog / CMS" imageUrl="/images/uniekegerechten1.png" projectUrl="/food_blog"></project>
           <project title="Data visualisatie" imageUrl="/images/data.png" projectUrl="/data_visualisatie"></project>
           <project title="Vuejs / Axios CRUD" imageUrl="/images/vue1.png" projectUrl="/vue_crud"></project>
           <project title="Reservering ouderavond" imageUrl="/images/ouderavond.png" projectUrl="/ouderavond"></project>
           <project title="fake social media" imageUrl="/images/work2.png" projectUrl="/social_media"></project>
           <project title="Kapsters aan huis" imageUrl="/images/kapster.png" projectUrl="/kapsters"></project>
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
