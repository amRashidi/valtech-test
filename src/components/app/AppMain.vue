<script setup lang="ts">
    import VContainer from "@/components/grid/VContainer.vue"
import { computed } from "@vue/runtime-core"
    
</script>
<template>
    <main class="app__main" role="main" aria-labelledby="main-title" id="main">
        <v-container>
            <router-view></router-view>
        </v-container>
    </main>
</template>