<script setup lang="ts">
    import AppHeader from "@/components/app/AppHeader.vue"
import AppMain from "@/components/app/AppMain.vue";
import { appSetting, APP_ACTION, APP_IS_DARK } from "@/types/store";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
    const store =useStore()
const appMode = computed(() => store.getters[APP_IS_DARK])
const appClassess = computed(() => ({
    app:true,
    "app--dark": appMode.value
}))
const handleAppTheme = () => {
    store.dispatch(APP_ACTION,{key:appSetting.theme,dark:!appMode.value})
}
    </script>
<template>
    <div :class="appClassess">
        <app-header :is-dark="appMode" @toggle="handleAppTheme" />
        <app-main></app-main>
    </div>
</template>


<style>
</style>