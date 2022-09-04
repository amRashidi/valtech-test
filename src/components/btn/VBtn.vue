<script setup lang="ts">
import { computed } from "@vue/runtime-core"
import { LocationAsRelativeRaw } from "vue-router"

    const props =defineProps<{router?:boolean;rounded?:boolean;to?:LocationAsRelativeRaw; outline?:boolean,text?:boolean;dark?:boolean;disabled?:boolean}>()
    const btnComponent = computed(() => !!props.router ? 'router-link': 'button')
    const btnAttrs = computed(() => ({
        disabled: props.disabled,
        to: props.to
    }))
    const btnClasess = computed(() => ({
        "v-btn": true,
        "v-btn--outlined": props.outline,
        "v-btn--disabled": props.disabled,
        "v-btn--rounded": props.rounded,
        "v-btn--text": props.text,
        "v-btn--dark": props.dark,
    }))
    const componentRole = computed(() => !!props.router ? "link" : "button")
</script>

<template>
    <component :is="btnComponent" v-bind="btnAttrs" :class="btnClasess" tabindex="0" :role="componentRole">
        <div class="v-btn__content">
            <slot />
        </div>
    </component>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/btn";
</style>