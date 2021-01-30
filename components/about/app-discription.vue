<template>
    <section id="discription">
        <div class="container-fluid">
            <div class="row mt-5">

                <div class="col-12 d-flex">
                    <div class="text-discription">
                        <h4 class="font-weight-bold">Aim-Time</h4>
                        <hr />
                        <p align="left">{{ $t('about.textFirst') }}</p>
                    </div>
                    <img class="z-depth-1-half" src="@/assets/images/main/about1.jpg" />
                </div>

                <div class="col-12 center-block d-flex">
                    <img class="z-depth-1-half" src="@/assets/images/main/about2.jpg" />
                    <div class="text-discription">
                        <h4 class="font-weight-bold">{{ $t('about.headSecond') }}?</h4>
                        <hr />
                        <p align="justify">{{ $t('about.textSecond') }}</p>
                    </div>
                </div>

                <div class="col-12 d-flex">
                    <div class="text-discription">
                        <h4 class="font-weight-bold">{{ $t('about.headThird') }}</h4>
                        <hr />
                        <p align="left">{{ $t('about.textThird') }}</p>
                    </div>
                    <img class="z-depth-1-half" src="@/assets/images/main/about3.jpg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "aboutus",
};
</script>

<style lang="scss" scoped>
#discription {

    //common

    text-align: left;
    .text-discription{
        height: auto;
    }

    .blocks__aboutus {
        height: auto;
    }
    p {
        font-family: "Inter";
        color: #404040;
    }

    hr {
        width: 60px;
        border: 1px solid #000;
    }

    img {
        border-radius: 50%;
        filter: brightness(85%);
        user-select: none;
    }

    //adaptive queryies

    @media (min-width: 1501px) {
        .blocks__aboutus {
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1.2em;
        }
        img {
            margin: 16px;
            height: 260px;
            width: 260px;
        }
    }
    
    @media (min-width: 1200px) and (max-width: 1500px) {
        .blocks__aboutus {
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1.1em;
        }
        img {
            margin-left: 40px;
            margin-right: 40px;
            margin-bottom: 40px;
            height: 240px;
            width: 240px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .blocks__aboutus {
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1em;
        }
        img {
            margin-left: 40px;
            margin-right: 40px;
            margin-bottom: 40px;
            height: 240px;
            width: 240px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .blocks__aboutus {
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1em;
        }
        img {
            margin: 20px;
            height: 200px;
            width: 200px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .blocks__aboutus {
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1em;
        }
        img {
            margin: 10px;
            height: 180px;
            width: 180px;
        }
    }
    
    @media (max-width: 575px) {
        .col-12{
            display: block !important;
            .text-discription{
                align-items: flex-start !important;
            }
        }
        .center-block{
            img{
                display: none !important;
            }
        }
        .blocks__aboutus {
            align-self: flex-start;
            width: 100%;
            padding-top: 30px;
        }
        p {
            font-size: 1em;
        }
        img {
            margin-top: 20px;
            margin-bottom: 20px;
            height: auto;
            width: 100%;
            border-radius: 0 !important;
        }

    }
}
</style>
