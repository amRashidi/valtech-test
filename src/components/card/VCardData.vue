<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import VBtn from "@/components/btn/VBtn.vue"
import VLazyImg from "@/components/image/VLazyImg"

    const props = defineProps<{intro?:boolean;title:string,subtitle:string;description:string;src:string;loading?:boolean;id?:string}>();
    const title = computed(() => props.title)
const subtitle = computed(() => props.subtitle)
const description = computed(() => props.description)
const src  = computed(() => props.src)
    const isIntro = computed(() => !!props.intro);
    const titleComponent = computed(() => isIntro.value ? "h2" : "h3")
    const cardClass = computed(() => ({card:true,"card--intro":isIntro.value,"card--loading":props.loading}))
    const cardSubtitleClasess = computed(() => ({card__subtitle:true,"skeleton":props.loading}))
const cardTitleClasess = computed(() => ({card__title:true,"skeleton":props.loading}))
const cardDescriptionClasess = computed(() => ({card__description:true,"skeleton":props.loading}))
</script>
<template>
    <article :class="cardClass" :aria-labelledby="`article-title-${title}`">
        <v-lazy-img class="card__img" :src="src" :alt="title" />
        <div class="card__wrapper">
            <div :class="cardSubtitleClasess" v-text="subtitle" />
            <component :is="titleComponent" :class="cardTitleClasess" v-text="title" :id="`article-title-${title}`" />
            <p :class="cardDescriptionClasess" v-text="description" />
            <v-btn v-if="!!props.id" class="card__action" :router="!!props.id" :to="{name:'City',params:{id:props.id}}" :aria-label="title"
                dark rounded text outline>
                read more
            </v-btn>
        </div>
    </article>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/card";
</style>