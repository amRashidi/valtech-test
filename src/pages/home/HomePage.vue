<script setup lang="ts">
import VRow from "@/components/grid/VRow.vue"
import VCol from "@/components/grid/VCol.vue"
import VCardData from "@/components/card/VCardData.vue"
import { computed, onMounted } from "@vue/runtime-core"
import { useStore } from "vuex";
import {APP_ACTION, CITY_LIST_ACTION,CITY_LIST_ITEMS, CITY_LIST_LOADING} from "@/types/store"
    const store = useStore()
    const items = computed(() => store.getters[CITY_LIST_ITEMS])
    const loading = computed(() => store.getters[CITY_LIST_LOADING])
    const handleGetItems = () => {
        store.dispatch(CITY_LIST_ACTION)
    }
    onMounted(() => {
        handleGetItems()
    })
</script>
<template>
    <h1 class="app__title" id="main-title">list of articles</h1>
    <v-row>
        <v-col v-for="item,i in items" :key="i" v-bind="item.grid">
            <v-card-data v-bind="item.item" :loading="loading" />
        </v-col>
    </v-row>
</template>