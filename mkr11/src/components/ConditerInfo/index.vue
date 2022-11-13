<template>
    <div class="info-container">
        <div>
            <p>{{name}}</p>
        </div>
        <div>
        <p>{{address}}</p>
        </div>
        <div>
            <p>{{specialisation}}</p>
        </div>
        <div>
            <p>{{rating}}</p>
        </div>
        <button @click.stop="deleteAction(name)"> delete </button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        name: "ConditerInfo",
        props: {
            name: {
                type: String,
                default: "None"
            },
            address: {
                type: String,
                default: "None"
            },
            specialisation: {
                type: String,
                default: "None"
            },
            rating: {
                type: Number,
                default: 0
            },
        },
        methods: {
            ...mapActions(["deleteAction"])
        },
    }
</script>

<style lang="css" scoped>
    .info-container {
        display: flex;

        height: 75px;
        width: 500px;
        border: 2px solid #252525;
        border-radius: 10px;
        margin: 5px;
        align-items: center;
        justify-content: space-evenly;
    }

    .info-container div {
        width: 100px;
        display: flex;
        justify-content: center;
    }

    button {
        width: 100px
    }
</style>