<template>
    <section id="navigation">
        <div class="container-fluid">
            <div class="row">
                <div id="navigation-wrapper" class="col-12 text-center">
                    <p class="font-weight-bold text-white"><NuxtLink :to="localePath('/')">{{ $t('panel.home') }}</NuxtLink> \ {{ title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "navigation",
    props: ['title'],
};
</script>

<style lang="scss" scoped>
#navigation {
    min-height: 200px;
    background-color: #29254b;
}

#navigation-wrapper {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 90px;
    color: #fff;
    background-color: rgba(92, 85, 134, 0.808);
}

p {
    font-size: 1.4em;
}

a{
    color: #fff;
    &:hover{
        text-decoration: underline;
    }
}
</style>
