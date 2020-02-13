<template>
    <div>
       <section class="allProject bg-gray-200 p-4">
           <project title="Reservering ouderavond" imageUrl="/images/ouderavond.png" projectUrl="http://michelz.nl/Ouderavond/Website/index.php"></project>
           <project title="Kapsters aan huis" imageUrl="/images/kapster.png" projectUrl="https://chaneldaisykapsters.nl/"></project>
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
