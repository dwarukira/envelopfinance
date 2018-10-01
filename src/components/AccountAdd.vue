<template>
    <div>
        <form v-on:submit.prevent="addAccount(name, balance)">
            <input class="input" type="text" name='name' placeholder="Text input" v-model="name"/>
            <input class="input" type="number" v-model="balance" />
            <button class="button"  type="submit">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'AccountAdd',

    data() {
        return {
            name: "",
            balance:0
        }
    },

    methods: {
        addAccount(name, balance){
            this.$store.dispatch("addAccount", {name:this.name, balance:this.balance})
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>
