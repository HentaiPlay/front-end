<template>
    <section id="partners">
        <div class="container-fluid mt-3 mb-3">
            <div class="row">
                <div class="col-12">
                    <p class="font-weight-bold">{{ $t('partners.title') }}</p>  
                     
                    <VueSlickCarousel v-bind="settings">
                        <div class="slider__item">
                            <a href="https://www.mos.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/GovernmentMoscow.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://government.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/GovernmentRF.png">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://eksmo.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/Eksmo.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://www.judo.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/JudoRF.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://www.rosminzdrav.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/MinistryOfHealth.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://er.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/UnitedRussia.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="http://newliga.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/NewLeague.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://www.eju.net"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/JudoEU.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="http://www.rushydro.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/RusHydro.jpg">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="http://sambo.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/SAMBO.png">
                            </a>
                        </div>
                        <div class="slider__item">
                            <a href="https://ertelecom.ru"
                            target="_blank"
                            >
                                <img src="@/assets/images/partners/ertelecom.png">
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            settings: {
                "arrows": true,
                "dots": false,
                "focusOnSelect": true,
                "infinite": true,
                "autoplay": true,
                "slidesToShow": 6,
                "slidesToScroll": 1,
                "speed": 500,
                "pauseOnHover": false,
                "pauseOnFocus": false,
                "responsive": [
                    {
                    "breakpoint": 2271,
                    "settings": {
                        "slidesToShow": 7,
                        "slidesToScroll": 1,
                        "infinite": true,
                    }
                    },
                    {
                    "breakpoint": 1500,
                    "settings": {
                        "slidesToShow": 6,
                        "slidesToScroll": 1,
                        "infinite": true,
                    }
                    },
                    {
                    "breakpoint": 1200,
                    "settings": {
                        "slidesToShow": 5,
                        "slidesToScroll": 1,
                        "infinite": true,
                    }
                    },
                    {
                    "breakpoint": 992,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 1,
                        "infinite": true,
                    }
                    },
                    {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 576,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2
                    }
                    }
                ]
            },
        };
    },
};
</script>

<style lang="scss" scoped>
 
    #partners{

        //common

        padding: 20px;
        tr{
            background-color: red;
        }
        #slider-wrapper{
            padding-right: 40px;
            padding-left: 40px;
        }
        p{
            font-size: 1.4em;
            font-family: "Inter";
        }
        a:focus{
            border: 2px solid #fff;
            outline: none !important;
        }
        img{
            padding: 20px;
            width: 90%;
            height: auto;
            margin-top: 50%;
            margin-left: auto;
            margin-right: auto;
            transform: translate(0, -50%);
        }

        //adaptive queryies

        @media (min-width: 1701px){
            .slider__item{
                width: 110px;
                height: 200px;
                margin-bottom: 10px;
            }
            img{
                padding: 40px;
                width: 90%;
                height: auto;
                margin-top: 50%;
                margin-left: auto;
                margin-right: auto;
                transform: translate(0, -50%);
            }
        }
        
        @media (min-width: 1501px) and (max-width: 1700px) {
            .slider__item{
                width: 130px;
                height: 200px;
            }
            img{
                padding: 40px;
                width: 90%;
                height: auto;
                margin-top: 50%;
                margin-left: auto;
                margin-right: auto;
                transform: translate(0, -50%);
            }
        }

        @media (min-width: 1200px) and (max-width: 1500px) {
            .slider__item{
                width: 150px;
                height: 180px;
            }
        }

        @media (min-width: 992px) and (max-width: 1199px) {
            .slider__item{
                width: 140px;
                height: 180px;
            }
        }

        @media (min-width: 768px) and (max-width: 991px) {
            .slider__item{
                width: 140px;
                height: 170px;
            }
        }

        @media (min-width: 576px) and (max-width: 767px) {
            .slider__item{
                width: 120px;
                height: 180px;
                padding: 24px;
            }
        }

        @media (max-width: 575px){
            .slider__item{
                width: 100px;
                height: 120px;
            }
        }


    }

</style>
