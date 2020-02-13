<template>
        <li  class="p-4 progess-bar text-white mb-2 shadow-md font-bold" >
            <p><slot></slot></p>
        </li>
</template>

<script>
export default {
    name: 'skill',
    props: [
        'titel',
    ]
}
</script>
