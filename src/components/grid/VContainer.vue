<script setup lang="ts">
import { computed } from "@vue/runtime-core"

    const props = defineProps<{fluid?:boolean}>()
    const classess = computed(() => ({
        "v-container":true,
        "v-container--fluid":props.fluid
    }))
</script>
<template>
    <div :class="classess">

        <slot></slot>
    </div>
</template>