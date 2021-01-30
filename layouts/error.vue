<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="error-wrapper">
                    <h1 class="font-weight-bold text-center">{{ error.statusCode }}</h1>
                    <h2 class="font-weight-bold text-center">Page not found</h2>

                        <NuxtLink :to="localePath('/')" class="flex-center mt-4"><i class="fas fa-reply pr-2"></i> Return to Home page</NuxtLink>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'error-layout',
    props:{
        error:{
            type: Object,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
.error-wrapper{
    margin-top: 25vh;
    height: auto;
    width: auto; 
}
.link-wrapper{
    margin: auto;
    width: auto;
    border: 1px solid black;
}
h1{
    font-family: "Inter";
    font-size: 5em !important;
    color: #404040;
}
h2{
    font-family: "Inter";
    color: #404040;
}
a{
    font-weight: bold;
    font-family: "Inter";
    color: grey;
    &:hover{
        color: #000;
    }
}
</style>