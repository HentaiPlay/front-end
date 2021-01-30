<template>
    <nav
        class="navbar navbar-light navbar-expand-custom fixed-top z-depth-1-half"
    >
        <NuxtLink class="navbar-brand" :to="localePath('/')" 
            ><img src="@/assets/images/main/logo.png"
        /></NuxtLink>

        <button
            @click="changeBurger()"
            class="navbar-toggler burger-button"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <div id="burger">
                <span></span><span></span><span></span><span></span>
            </div>
        </button>

        <div id="menu" class="collapse navbar-collapse">
            <div id="menu__slide" class="mr-auto" @click="closeNavbar()">

                <NuxtLink
                    :to="localePath('/')"
                    class="link-slide font-weight-bold"
                    >{{ $t('navbar.home') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/equipments')"
                    class="link-slide font-weight-bold"
                    >{{ $t('navbar.equipments') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/about')"
                    class="link-slide font-weight-bold"
                    >{{ $t('navbar.about') }}</NuxtLink
                >
                <NuxtLink
                    :to="localePath('/portfolio')"
                    class="link-slide font-weight-bold"
                    >{{ $t('navbar.portfolio') }}</NuxtLink
                >
            </div>

            <div id="menu__contact">
                <nuxt-link
                class="text-dark font-weight-bold"
                v-for="locale in $i18n.locales"
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                :to="switchLocalePath(locale.code)">{{ locale.name }}
                </nuxt-link>
                <a
                    id="number"
                    href="tel:+74999909987"
                    class="link-contact font-weight-bold"
                    >+7(499)990-99-87</a
                >
                <a
                    class="mr-2"
                    href="https://wa.me/79253505248"
                    target="_blank"
                    id="whatsapp"
                    ><img src="@/assets/images/main/whatsapp-symbol.svg"
                /></a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "app-navbar", 
    methods:{
        changeBurger(){
            $("#burger").toggleClass("open");
        },
        closeNavbar(){
            $("#burger").toggleClass("open");
            $(".navbar-collapse").collapse("hide");
        }
    } 
};
</script>

<style lang="scss" scoped>

//common 

.navbar {
    min-height: 80px !important;
    background-color: #fff;
    z-index: 99 !important;

    img {
        width: auto;
    }

    .link-slide {
        font-family: "Ubuntu", sans-serif;
        text-transform: uppercase !important;
        color: #212121;
        padding: 10px;
        position: relative;
    }

    #lang {
        font-family: "Ubuntu", sans-serif;
        text-transform: uppercase !important;
        color: #212121;
        font-size: 1em;
        padding: 10px;
        position: relative;
    }

    #number {
        font-family: "Inter", sans-serif;
        text-transform: uppercase !important;
        color: #212121;
        font-size: 1.2em;
        padding: 10px;
        position: relative;
    }

    //adaptive queries for collapse

    @media (min-width: 1100px) {
        #menu {
            background-color: #fff;
        }

        #menu__slide {
            width: 556px !important;
            float: left;
            position: relative;
        }

        #menu__contact {
            float: right !important;
            padding-left: 10px;
        }

    }

    @media (max-width: 1099px) {
        #menu {
            margin-top: 8px;
        }

        #menu__slide {
            padding-top: 20px;
            padding-left: 10%;
            justify-content: center;
            height: 220px;
        }

        #menu__contact {
            padding-left: 10%;
            padding-top: 10px;
            padding-bottom: 16px;
        }

        .link-slide {
            width: 100%;
            float: left;
            display: flex;
        }
    }

    //adaptive queryies
    
    @media (min-width: 1501px) {
        min-height: 90px !important;
        img {
            height: 60px;
            margin-top: 4px;
        }
        .link-slide {
            font-size: 1em;
        }
    }
    
    @media (min-width: 576px) and (max-width: 1500px) {
        min-height: 80px !important;
        img {
            height: 50px;
            margin-top: 4px;
        }
        .link-slide {
            font-size: 1em;
        }
    }

    @media (max-width: 575px) {
        min-height: 80px !important;
        img {
            height: 50px;
            margin-top: 4px;
        }
        .link-slide {
            font-size: 0.9em;
        }
    }

}
</style>
