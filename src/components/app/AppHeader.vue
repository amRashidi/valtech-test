<script setup lang="ts">
import LightBulbIcon from "@/assets/icons/lightbulb-line.svg";
import DarkBulbIcon from "@/assets/icons/lightbulb-fill.svg";
import VBtn from "@/components/btn/VBtn.vue"
import { computed } from "@vue/runtime-core";
    const props = defineProps<{isDark: boolean}>();
    const emit = defineEmits(["toggle"])
    const isDark = computed(() => !!props.isDark)
    const btnClass =computed(() => ({
        "app__header--light":!isDark.value,
        "app__header--dark":isDark.value,
    }))
    const appName = computed(() => "City")
</script>
    
<template>
    <header class="app__header" role="banner">
        <router-link class="app__logo" :to="{name:'Home'}">{{appName}}</router-link>
        <a href="#main" ref="skipLink" class="app__skipLink">Skip to main content</a>
        <v-btn :class="btnClass" text @click="$emit('toggle')" aria-label="darkmode">
            <DarkBulbIcon v-if="isDark" />
            <LightBulbIcon v-else />
        </v-btn>
    </header>
</template>