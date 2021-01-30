<template>
    <section id="galleries">
        <div class="container-fluid mt-4">
            <div v-if="$apollo.loading" class="row">
                <div class="col-12">
                    <div class="text-center mt-5 loader">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 p-2"
                    v-for="gallery in galleryies"
                    :key="gallery.id">
                    <div class="card z-depth-1-half">
                        <div class="card-body">
                            <img class="card-img" :src="require('@/assets/images/gallery/' + gallery.path_folder + '/' + gallery.images.split('###')[0])">
                            <div class="card-text-wrapper mt-3">
                                <p class="card-title text-center font-weight-bold">{{ gallery.title }}</p>
                            </div>
                            <div class="wrapper-link mt-4 center">
                                <NuxtLink
                                :to="localePath('/gallery/' + gallery.id)"
                                >
                                <div class="button-card text-center font-weight-bold center">{{ $t('portfolio.show') }}</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gql from 'graphql-tag'
export default {
    data() {
        return {
            getGalleryies: [],
            locale: this.$i18n.locale
        };
    },
    mounted(){
        this.loadGalleryies();
    },
    methods: {
        async loadGalleryies() {
            const response = await this.$apollo.query({
                query: gql(`
                    {
                        getAllGalleryies{
                            id, 
                            title_ru, 
                            title_en,
                            path_folder,
                            images
                        }
                    }
                `)
            })
            this.getGalleryies = response.data.getAllGalleryies;
        }
    },
    computed:{
        galleryies(){

            let galleryies = this.getGalleryies

            //made switcher for multi-language 

            this.getGalleryies.forEach(element => {

                if(this.locale == 'ru'){
                    element["title"] = element.title_ru;
                }else{
                    if(this.locale == 'en'){
                        element["title"] = element.title_en;
                    }
                }

            });
            
            return galleryies;
        }
    }
}
</script>

<style lang="scss" scoped>
#galleries{

    //common

    padding-top: 20px;
    padding-bottom: 20px;
    min-height: 80vh;

    .card{
        border-radius: 10px;
        border: 1px solid grey;
    }
    .button-card{
        border: 1px solid #1f1c38;
        border-radius: 10px;
        transition: 0.3s;
        margin: auto;
        &:hover{
            cursor: pointer;
            color: #fff;
            background-color: #1f1c38;
        }
    }
    a{
        color: #000;
    }

    //adaptive queryies

    @media(min-width: 1501px) {
        .card{
            max-height: 500px;
        }
        .card-img{
            height: 250px !important;
            width: 100%;
        }
        p{
            font-size: 1em;
        }
        .card-text-wrapper{
            height: 70px;
        }
        .button-card{
            width: 250px;
            padding: 0.5em 1em;
        }
    }

    @media(min-width: 1200px) and (max-width: 1500px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 1em;
        }
        .card-text-wrapper{
            height: 70px;
        }
        .button-card{
            width: 250px;;
            padding: 0.5em 1em;
        }
    }

    @media(min-width: 992px) and (max-width: 1199px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 1em;
        }
        .card-text-wrapper{
            height: 90px;
        }
        .button-card{
            width: 250px;;
            padding: 0.5em 1em;
        }
    }

    @media(min-width: 768px) and (max-width: 991px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 1em;
        }
        .card-text-wrapper{
            height: 70px;
        }
        .button-card{
            width: 250px;;
            padding: 0.5em 1em;
        }
    }

    @media(min-width: 576px) and (max-width: 767px) {
        .card{
            max-height: 500px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 1em;
        }
        .card-text-wrapper{
            height: 90px;
        }
        .button-card{
            width: 150px;;
            padding: 0.5em 1em;
        }
    }

    @media(max-width: 575px) {
        .card{
            max-height: 500px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 70px;
        }
        .button-card{
            width: 150px;;
            padding: 0.5em 1em;
        }
    }
}
</style>