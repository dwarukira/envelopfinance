<template>
    <div>
        <form>
            I love: <input type="text" v-model="lover"/>
        </form>
        <p>{{ lover }}</p>
    </div>
</template>

<script>
export default {
    name:"Lover", 
    data() {
        return {
            lover:''
        }
    }
}
</script>

<style>

</style>
