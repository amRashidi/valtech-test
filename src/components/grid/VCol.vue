<script setup lang="ts">
import { computed } from "@vue/runtime-core"
    const props = defineProps<{col?:number|string,sm?:number|string,md?:number|string,lg?:number|string}>()
    const classess = computed(() => {
    let items = ["v-col"]
    Object.keys(props).forEach((item) => {
    const value = (props as any)[item]
    if(!!value && ((Number(value) >0 && Number(value)<=12) || value==="auto" )) {
        items.push(`v-${item ==='col'?'col':'col-'+item}-${value}`)
        
    }
    })
    return items
})
</script>
<template>
    <div :class="classess">
        <slot></slot>
    </div>
</template>