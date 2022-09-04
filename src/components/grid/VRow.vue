<script setup lang="ts">
import { computed } from "@vue/runtime-core"

    const props = defineProps<{noGutters?:boolean}>()
    const classess = computed(() => ({
        "v-row":true,
        "v-row--no-gutters":props.noGutters
    }))
</script>
<template>
    <div :class="classess">

        <slot></slot>
    </div>
</template>