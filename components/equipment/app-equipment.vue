<template>
    <section id="equipment">
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
                <div class="col-12">
                    <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                    </CoolLightBox>
                </div>
                <div class="col-12 mt-4 mb-4">
                    <h4 class="font-weight-bold">{{ equipment.title }}</h4>
                </div>
                <div class="col-12 col-sm-12 col-md-5">
                    <div class="images-block">
                                        
                        <div class="view overlay zoom mt-3" @click="loadImages()">
                            <img class="img-fluid" :src="require('@/assets/images/equipments/' + equipment.category.marker + '/'+ equipment.image.split('###')[0])">
                            <div class="mask flex-center waves-effect waves-light rgba-black-light">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>  
                        <a class="mt-4 flex-center lightbox-link" @click="loadImages()">{{ $t('equipment.allphoto') }}</a>

                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-7">
                    <div class="discription-block">
                        <h5 class="font-weight-bold mb-3">{{ $t('equipment.category') }}:</h5>
                        <NuxtLink :to="localePath('/equipments/' + equipment.category.marker)">{{ equipment.category.title }}</NuxtLink>
                        <h5 class="font-weight-bold mt-3 mb-3">{{ $t('equipment.characteristics') }}:</h5>
                        <span>{{ equipment.characteristic }}</span>
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
            getEquipment: [],
            locale: this.$i18n.locale,
            items: [],
            root:[],
            index: null
        };
    },

    components: {
        CoolLightBox,
    },

    computed:{
        equipment(){

        let equipment = this.getEquipment

            //made switcher for multi-language 

            if(this.locale == 'ru'){
                this.getEquipment["title"] = this.getEquipment.title_ru;
                this.getEquipment.category["title"] = this.getEquipment.category.title_ru;
                this.getEquipment["characteristic"] = this.getEquipment.characteristic_ru;
            }else{
                if(this.locale == 'en'){
                    this.getEquipment["title"] = this.getEquipment.title_en;
                    this.getEquipment.category["title"] = this.getEquipment.category.title_en;
                    this.getEquipment["characteristic"] = this.getEquipment.characteristic_en;
                }
            }

            return equipment;
        }
    },

    apollo: {
        // Query with parameters
        getEquipment: {
            // gql query
            query(){
                return gql`query getEquipment($id: ID!) {
                    getEquipment(id: $id){
                        id
                        title_ru
                        title_en
                        characteristic_ru
                        characteristic_en
                        category{
                            id
                            marker
                            title_ru
                            title_en
                        }
                        image
                    }
                }`
            },
            variables(){
                return {
                    id: this.$route.params.id
                }
            },
            update: data => data.getEquipment 
        }
    },

    //lightbox need load images with method
    methods:{
        loadImages(){
            this.index = 0;
            let images;
            let pathMarker;
            this.pathMarker = this.equipment.category.marker;
            this.images = this.equipment.image.split('###').forEach(element => {
                return this.items.push(require('@/assets/images/equipments/' + this.pathMarker + '/' + element));
            });
        }
    },

};
</script>

<style lang="scss" scoped>
#equipment{

    //common

    min-height: 80vh;
    font-family: "Inter";

    .images-block{
        img{
            border-radius: 15px;
        }
    }
    .mask{
        border-radius: 15px !important;
        padding: 20px;
    }
    a{
        color: black;
        &:hover{
            text-decoration: underline;
        }
    }
    .lightbox-link{
        color: black !important;
        &:hover{
            text-decoration: underline !important;
        }
    }
    .fa-search-plus{
        color: #fff;
    }
    span{
        white-space: pre-wrap;
    }

    //adaptive queryies

	@media (min-width: 1501px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .images-block{
            img{
                padding: 60px;
            }
        }
        span{
            font-size: 1.2em;
        }
        a{
            font-size: 1.2em;
        }
    }

	@media (min-width: 1200px) and (max-width: 1500px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .images-block{
            img{
                padding: 40px;
            }
        }
        span{
            font-size: 1em;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .images-block{
            img{
                padding: 40px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .images-block{
            img{
                padding: 30px;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .fa-search-plus{
            font-size: 3em;
        }
        .images-block{
            img{
                padding: 40px;
            }
            margin-bottom: 20px;
        }
    }

    @media (max-width: 575px) {
        .fa-search-plus{
            font-size: 2.8em;
        }
        .images-block{
            img{
                padding: 30px;
            }
            margin-bottom: 20px;
        }
    }
}
</style>