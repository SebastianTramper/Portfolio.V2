<template>
    <div class="">
        <u>
            <li  class="p-4 progess-bar text-white mb-2 shadow-md" >
                <p><slot></slot></p>
            </li>
        </u>
    </div>
</template>

<script>
export default {
    name: 'skill',
    props: [
        'titel',
    ]
}
</script>
