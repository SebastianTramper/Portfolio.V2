<template>
    <div>
        <section class="content-image" v-bind:style="{ background: 'url(' + content_image + ') center/cover'}"></section>
       <article class="content-grid mt-8">
           <section class="content_text">
              <p><slot></slot></p>
           </section>
           <section class="content-links">
               <a class="content_github" v-bind:href="github_link" target="_blank">
                   <p>Github</p>
               </a>
               <a class="content_website" v-bind:href="website_link" target="_blank">
                   <p>Website</p>
               </a>
           </section>
       </article>
    </div>
</template>

<script>
    export default {
        name: "project-content",

        props: [
            'content_image',
            'github_link',
            'website_link'
        ]
    }
</script>

<style scoped>

</style>
