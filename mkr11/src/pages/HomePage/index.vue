<template>
    <div>
        <p>All Conditers</p>
        <conditers-table :Data="getConditers"/>
    </div>
</template>

<script>
  import ConditersTable from "@/components/ConditersTable/index.vue";
  import { mapGetters } from "vuex";

  export default{
    name: 'HomePage',
    components: {
      ConditersTable,
    },
    computed: {
      ...mapGetters(["getConditers"])
    },
  }
</script>

<style lang="css" scoped>

</style>