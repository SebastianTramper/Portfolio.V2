<template>
    <div class="w-3/4">
        <u>
            <li  class="p-4 progess-bar w-full bg-blue-900 text-white mb-2">
                <slot></slot>
            </li>
        </u>
    </div>
</template>

<script>
export default {
    name: 'skill',
    props: [
        'titel'
    ]
}
</script>