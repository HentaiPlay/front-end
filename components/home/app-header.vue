<template>
    <section id="header">
        <div class="container-fluid view d-flex align-items-center">
            <div class="row">
                <div class="col-12" id="header__title">
                    <h1 class="font-weight-bold">Aim-Time</h1>
                    <hr />
                    <p class="font-weight-bold">
                        {{ $t('header.title') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app-header"
    };
</script>

<style lang="scss" scoped>

//common

#header {
    display: flex;
    justify-content: center;
    height: auto;
    background: url("~assets/images/main/background.jpg") no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;

    #header__title {
        max-width: 100%;
        color: #fff;
        background-color: rgba(92, 85, 134, 0.808);
    }

    hr {
        border: 3px solid #fff;
        width: 120px;
    }

    //adaptive queryies

    @media (min-width: 1501px) {
        #header__title {
            padding-top: 25%;
            padding-bottom: 25%;
            padding-left: 40px;
            left: 16%;
            min-width: 60vw;
            max-width: 100%;
        }
        h1 {
            font-size: 4.8rem;
        }
        p {
            font-size: 1.4rem;
        }
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        #header__title {
            padding-top: 25%;
            padding-bottom: 25%;
            padding-left: 30px;
            left: 10%;
            min-width: 60vw;
            max-width: 100%;
        }
        h1 {
            font-size: 4rem;
        }
        p {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        #header__title {
            padding-top: 25%;
            padding-bottom: 25%;
            padding-left: 30px;
            left: 10%;
            min-width: 60vw;
            max-width: 100%;
        }
        h1 {
            font-size: 4rem;
        }
        p {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        #header__title {
            padding-top: 30%;
            padding-bottom: 25%;
            padding-left: 30px;
            left: 10%;
            min-width: 60vw;
            max-width: 100%;
        }
        h1 {
            font-size: 3.8rem;
        }
        p {
            font-size: 1.1rem;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        #header__title {
            padding-top: 30%;
            padding-bottom: 25%;
            padding-left: 20px;
            left: 10px;
            min-width: 100%;
            max-width: 100%;
        }
        h1 {
            font-size: 3.6rem;
        }
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 575px) {
        #header__title {
            padding-top: 40%;
            padding-bottom: 25%;
            padding-left: 10px;
            left: 0;
            min-width: 100%;
            max-width: 100%;
        }
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1rem;
        }
    }
}

</style>
