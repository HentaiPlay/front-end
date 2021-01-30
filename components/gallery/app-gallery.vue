<template>
    <section id="gallery">
        <div class="container-fluid p-4">
            <div v-if="$apollo.loading" class="row">
                <div class="col-12">
                    <div class="text-center mt-5 loader">
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="row mt-2 mb-5">
                <div class="col-12 mt-4 mb-4">
                    <h4 class="font-weight-bold">{{ gallery.title }}</h4>
                </div>
                <div class="row mt-4 mb-4">
                    <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                    </CoolLightBox>

                <div class="image-block col-lg-3 col-md-4 col-sm-6 col-6 mt-4 mb-4"
                v-for="(image, imageIndex) in gallery.images.split('###')"
                :key="imageIndex"
                @click="loadImages(imageIndex)">
                    <div class="view overlay zoom">
                      <img class="img-fluid" :src="require('@/assets/images/gallery/' + gallery.path_folder + '/' + image)">
                      <div class="mask flex-center waves-effect waves-light rgba-black-strong">
                        <i class="fas fa-search-plus"></i>
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
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    data() {
        return {
            getGallery: [],
            locale: this.$i18n.locale,
            items: [],
            index: null
        };
    },

    methods:{
        loadImages(imageIndex){
            this.index = imageIndex;
            let images;
            this.images = this.gallery.images.split('###').forEach(element => {
                return this.items.push(require('@/assets/images/gallery/' + this.gallery.path_folder + '/' + element));
            });
        }
    },

    components: {
        CoolLightBox,
    },

    apollo: {
        // Query with parameters
        getGallery: {
            // gql query
            query(){
                return gql`query getGallery($id: ID!) {
                    getGallery(id: $id){
                        id,
                        title_ru,
                        title_en,
                        path_folder,
                        images
                    }
                }`
            },
            variables(){
                return {
                    id: this.$route.params.id
                }
            },
            update: data => data.getGallery
        },
    },
    computed:{
        gallery(){
            let gallery = this.getGallery;

                if(this.locale == 'ru'){
                    this.getGallery["title"] = this.getGallery.title_ru;
                }else{
                    if(this.locale == 'en'){
                        this.getGallery["title"] = this.getGallery.title_en;
                    }
                }

            return gallery;
        }
    }

};
</script>

<style lang="scss" scoped>
#gallery{

    //common

    min-height: 80vh;
    font-family: "Inter";

    .image-block{
        border-radius: 15px !important;
    }
    .view{
        border-radius: 15px !important;
    }
    .mask{
        border-radius: 15px !important;
        padding: 20px;
    }
    .fa-search-plus{
        color: #fff;
    }

    //adaptive queryies

	@media (min-width: 1501px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .image-block{
            height: 280px;
        }
        img{
            height: 280px;
            width: 100%;
        }
    }

	@media (min-width: 1200px) and (max-width: 1500px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .image-block{
            height: 230px;
        }
        img{
            height: 230px;
            width: 100%;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .image-block{
            height: 200px;
        }
        img{
            height: 200px;
            width: 100%;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .image-block{
            height: 200px;
        }
        img{
            height: 200px;
            width: 100%;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .image-block{
            height: 200px;
        }
        img{
            height: 200px;
            width: 100%;
        }
    }

    @media (max-width: 575px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .image-block{
            height: 150px;
        }
        img{
            height: 150px;
            width: 100%;
        }
    }
}
</style>