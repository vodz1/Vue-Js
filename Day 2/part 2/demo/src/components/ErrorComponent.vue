<template>
    <div>
<h1 class="alert alert-danger">Opps...</h1>
<button class="btn btn-dark w-100" @click="HandleBack()">Back To Home</button>
<router-link class="btn btn-primary w-100 mt-2" to="/products">Back To Products</router-link>


</div>
</template>

<script>
    export default {
name : 'ErrorComponent',
methods: {
        HandleBack(){
            this.$router.push("/")
        }
    },
    }
</script>

<style scoped>

</style>