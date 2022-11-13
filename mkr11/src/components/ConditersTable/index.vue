<template>
    <div>
        <conditer-info 
        v-for="item in Data"
        :key="item.id"
        :name="item.name"
        :address="item.address"
        :specialisation="item.specialisation"
        :rating="item.rating"
        />
    </div>
</template>

<script>
    import ConditerInfo from "@/components/ConditerInfo/index.vue"
    export default {
        name: "ConditersTable",
        components: {
            ConditerInfo
        },
        props: {
            Data: {
                type: Array,
                default: () => [], 
            },
        },
    }
</script>

<style lang="css" scoped>

</style>