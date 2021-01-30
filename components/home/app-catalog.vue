<template>
    <section id="catalog">

    <div class="container-fluid">
        <h3 class="font-weight-bold text-center mt-5">{{ $t('catalog.title') }}</h3>
        <div class="row text-center mt-5 mb-5">    
    
        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/led-screen')"> 
            <div class="catalog__cards" id="led-screen">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.led') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/video-equipment')">
            <div class="catalog__cards" id="video-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.video') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/sound-equipment')">
                <div class="catalog__cards" id="sound-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                    <p class="font-weight-bold white-text">{{ $t('catalog.sound') }}</p>
                </div>
                </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/office-equipment')">
            <div class="catalog__cards" id="office-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.office') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/broadcast-equipmen')">
            <div class="catalog__cards" id="broadcast-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.broad') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/internet-equipment')">
            <div class="catalog__cards" id="internet-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.internet') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/sensor-equipment')">
            <div class="catalog__cards" id="sensor-equipment">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.sensor') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4">
            <NuxtLink :to="localePath('/equipments/synchronous-translation')">
            <div class="catalog__cards" id="synchronous-translation">
                <div class="catalog__mask mask flex-center rgba-black-strong">
                <p class="font-weight-bold white-text">{{ $t('catalog.transl') }}</p>
                </div>
            </div>
            </NuxtLink>
        </div>

        </div>
    </div>
    </section>
</template>

<script>
    export default{
        name: 'app-catalog',
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

#catalog{

    //common

    #led-screen{
        background: url('~assets/images/main/led-screen.jpg') no-repeat center center;
    }

    #video-equipment{
        background: url('~assets/images/main/video-equipment.jpeg') no-repeat center center;
    }

    #sound-equipment{
        background: url('~assets/images/main/sound-equipment.jpg') no-repeat center center;
    }

    #office-equipment{
        background: url('~assets/images/main/office-equipment.jpeg') no-repeat center center;
    }

    #broadcast-equipment{
        background: url('~assets/images/main/broadcast-equipment.jpg') no-repeat center center;
    }

    #internet-equipment{
        background: url('~assets/images/main/internet-equipment.jpg') no-repeat center center;
    }

    #sensor-equipment{
        background: url('~assets/images/main/sensor-equipment.jpg') no-repeat center center;
    }

    #synchronous-translation{
        background: url('~assets/images/main/synchronous-translation.jpg') no-repeat center center;
    }

    #led-screen,
    #video-equipment,
    #sound-equipment,
    #office-equipment,
    #broadcast-equipment,
    #internet-equipment,
    #sensor-equipment,
    #synchronous-translation{
        background-size: cover;
    }

    .catalog__cards{
        will-change: transform;
        border-radius: 15px;
        transition-timing-function: linear;
        transition-duration: 0.1s;
        backface-visibility: hidden;
        user-select: none;

        &:hover{
        backface-visibility: hidden;
        border-radius: 15px;
        transform: scale(1.1);
        transition-timing-function: linear;
        transition-duration: 0.2s;
        }
    }

    .catalog__mask{
        border-radius: 15px;
    }

    p{
        display: inline-block;
        font-family: 'Istok Web', sans-serif;
        backface-visibility: hidden !important;
        text-shadow: 1px 1px 2px black;
    }

    //adaptive queryies

	@media (min-width: 1501px) {
        .col-xl-3{
            padding: 10px;
        }
        .catalog__cards{
            height: 260px;
            width: 90%;
        }
        p{
            padding: 20px;
            font-size: 2rem;
        }
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        .catalog__cards{
            height: 230px;
            width: 100%;
        }
        p{
            font-size: 1.8rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .catalog__cards{
            height: 200px;
            width: 100%;
        }
        p{
            font-size: 1.4rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .catalog__cards{
            height: 260px;
            width: 100%;
        }
        p{
            padding: 20px;
            font-size: 1.5rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .catalog__cards{
            height: 240px;
            width: 100%;
        }
        p{
            padding: 10px;
            font-size: 1.4rem;
        }
    }

    @media (max-width: 575px) {
        .catalog__cards{
            height: 180px;
            width: 100%;
        }
        p{
            padding: 6px;
            font-size: 1rem;
        }
    }
}
</style>