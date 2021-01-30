<template>
    <section id="footer">

        <div class="container-fluid pt-5 pb-4">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-2">
                    <img src="@/assets/images/main/logo-white.png" />
                    <p class="mt-4">
                        {{ $t('footer.titleOne') }}
                    </p>
                    <a
                        class="social-icons"
                        href="https://www.facebook.com/AimTime2008"
                        target="_blank"
                        ><i
                            class=" example hoverable fab fa-facebook-f"
                            id="facebook"
                        ></i
                    ></a>
                    <a
                        class="social-icons"
                        href="https://www.youtube.com/channel/UCbAq64tANiFEhftEhxPcWVA"
                        target="_blank"
                        ><i
                            class=" example hoverable fab fa-youtube"
                            id="youtube"
                        ></i
                    ></a>
                    <a
                        class="social-icons"
                        href="https://www.instagram.com/at___group"
                        target="_blank"
                        ><i
                            class="font-weight-bold example hoverable fab fa-instagram"
                            id="instagram"
                        ></i
                    ></a>
                    <a
                        class="social-icons"
                        href="https://vk.com/aim_time"
                        target="_blank"
                        ><i
                            class=" example hoverable fab fa-vk"
                            id="vk"
                        ></i
                    ></a>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-2">
                    <p>
                        <i class="fas fa-map-marker-alt"></i> {{ $t('footer.adress') }}
                    </p>
                    <hr />
                    <a href="mailto:info@aim-time.com"
                        ><i class="fas fa-at"></i> info@aim-time.com</a
                    >
                    <hr />
                    <a href="tel:+74999909987"
                        ><i class="fas fa-mobile-alt"></i> +7 (499) 990-99-87</a
                    ><br />
                    <hr />
                    <a href="tel:+79253505248"
                        ><i class="fas fa-mobile-alt"></i> +7 (925) 350-52-48</a
                    >
                    <hr />
                    <p>* {{ $t('footer.forCall') }}</p>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-2">
                    <p align="left">
                        {{ $t('footer.titleTwo') }}<br>{{ $t('footer.titleThree') }}
                    </p>
                    <div id="whatsapp" class="my-4">
                        <a
                            class="font-weight-bold mr-2"
                            href="https://wa.me/79253505248"
                            target="_blank"
                            >{{ $t('footer.whatsapp') }} WHATSAPP<img
                                src="@/assets/images/main/whatsapp-symbol.svg"
                        /></a>
                    </div>
                    <p align="left">{{ $t('footer.titleFourth') }}:</p>
                    <a href="/presentation.pptx" download
                        ><i class="fas fa-file-alt"></i> {{ $t('footer.download') }}</a>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="copyright">
            <div class="row">
                <div class="col-12">
                    <p class="text-center font-weight-bold">
                        Copyright &copy; 2020 AimTime.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-footer"
};
</script>

<style lang="scss">
@import '@/assets/scss/mixins.scss';

#footer {
    border-top: 30px solid #5c5586ce;
    background-color: #1f1c38;

    #whatsapp {
        img {
            margin-left: 15px;
            height: 30px;
            width: auto;
        }
    }

    img {
        height: 100px;
        width: auto;
    }

    p {
        color: #fff;
        font-family: "Inter";
    }

    a {
        color: #fff;
        font-size: 1em;
        font-family: "Inter";
        &:hover {
            color: grey;
        }
    }

    hr {
        width: 95%;
        border: 1px solid #bdbdbd;
    }

    //adaptive queryies

    @media (min-width: 992px) and (max-width: 1199px) {
        img {
            height: 80px !important;
            width: auto;
        }
        #whatsapp {
        img {
            margin-left: 15px !important;
            height: 30px !important;
            width: auto !important;
        }
    }
    }

    //social icons dont need to resposive

    .social-icons {
        display: flex;
        float: left;
        padding: 10px;
    }

    #facebook {
        @include social-icons;
        &:hover {
            color: #fff !important;
            background-color: #3b5998;
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
    }

    #youtube {
        @include social-icons;
        &:hover {
            color: #fff !important;
            background-color: #ed302f;
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
    }

    #instagram {
        @include social-icons;
        &:hover {
            color: #fff !important;
            background-color: #2e5e86;
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
    }

    #vk {
        @include social-icons;
        &:hover {
            color: #fff !important;
            background-color: #4c75a3;
            transition: all 0.3s;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
        }
    }
}

//copyright

#copyright {
    background-color: #fff;
    height: 80px;

    p {
        color: #000;
        padding-top: 26px;
        font-size: 1.2em;
        font-family: "Inter";
    }
}
</style>
