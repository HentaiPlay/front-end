<template>
    <section id="reason">
        <div class="container-fluid mt-5 mb-5">
            <div class="row text-center">
                <div class="col-12">
                </div>
                <div class="col-12 col-sm-4">
                    <img src="@/assets/images/main/plainevent.jpg" />
                    <p class="font-weight-bold">
                        {{ $t('reason.first') }}
                    </p>
                </div>
                <div class="col-12 col-sm-4">
                    <img src="@/assets/images/main/handshake.jpg" />
                    <p class="font-weight-bold">
                        {{ $t('reason.second') }}
                    </p>
                </div>
                <div class="col-12 col-sm-4">
                    <img src="@/assets/images/main/desktop.jpg" />
                    <p class="font-weight-bold">
                        {{ $t('reason.third') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-reason",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

//common

#reason {
    height: auto;
    @include selection;

    img {
        width: auto;
        @include no-selection;
    }

    p {
        font-family: "Inter";
    }

    //adaptive queryies 

    @media (min-width: 1501px) {
        img {
            height: 160px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            font-size: 1.4em;
        }
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        img {
            height: 130px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            font-size: 1.2em;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        img {
            height: 120px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            font-size: 1.1em;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        img {
            height: 110px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            font-size: 1em;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        img {
            height: 100px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            font-size: 1em;
        }
    }

    @media (max-width: 575px) {
        .col-12{
            display: flex;
        }
        img {
            display: flex;
            justify-content: flex-start;
            flex-wrap: nowrap;
            left: 0;
            height: 80px;
            margin-bottom: 20px;
            margin-top: 30px;
        }
        p {
            display: flex;
            justify-content: flex-end;
            flex-wrap: nowrap;
            margin-top: 40px;
            margin-left: 30px;
            text-align: left;
            font-size: 1em;
            left: 0;
        }
    }

}
</style>
