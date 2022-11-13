<template>
    <div>
        <div class="input">
        <input v-model="input" placeholder="Name"/>
        <button @click.stop="findByNameAction(input)">Search</button>
        </div>
        <conditers-table :Data="getConditers"/>
    </div>
</template>

<script>
    import ConditersTable from "@/components/ConditersTable/index.vue";
    import { mapGetters, mapActions } from "vuex";

    export default {
        name: "SearchPage",
        components: {
            ConditersTable,
        },
        computed: {
            ...mapGetters(["getConditers"])
        },
        methods: {
            ...mapActions(["findByNameAction"])
        },
    }
</script>

<style lang="css" scoped>
    button {
        width: 100px;
    }
        
    .input {
        display: flex;
        margin: 5px;
    }
</style>