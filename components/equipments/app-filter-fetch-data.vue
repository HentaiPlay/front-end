<template>
    <section id="equipments">

        <!--FILTER-->

        <section id="filter">
            <div class="container-fluid p-4">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6">
                        <select v-model="selectCategory" @change="onChange($event)" class="browser-default custom-select font-weight-bold">
                            <option class="font-weight-bold" value="">{{ $t('equipments.all') }}</option>
                            <option class="font-weight-bold"
                            v-for="category in categories"
                            :key="category.id"
                            :value="category.marker"
                            >{{category.title}}</option> 
                        </select>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6" id="search-block">
                        <form class="form-inline d-flex md-form form-sm mt-0 mb-0 ">
                            <i class="fas fa-search" aria-hidden="true"></i>
                            <input v-model.trim="inputSearch" class="form-control form-control-sm ml-3 mb-0 w-75" type="search" :placeholder="$t('equipments.search')"
                                aria-label="Search">
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!--EQUIPMENTS LIST-->

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
                <div class="col-6 col-sm-6 col-md-4 col-lg-3 p-2"
                v-for="equipment in filteredProducts"
                :key="equipment.id"
                >
                    <div class="card z-depth-1-half">
                        <div class="card-body">
                            <div class="card-text-wrapper">
                                <p class="card-title font-weight-bold">{{ equipment.title.slice(0,50) }}</p>
                            </div>
                            
                            <img class="card-img" :src="require('@/assets/images/equipments/' + equipment.category.marker + '/' + equipment.image.split('###')[0])">

                            <div class="wrapper-link mt-4 center">
                                <NuxtLink
                                :to="localePath('/equipment/' + equipment.id)"
                                >
                                <div class="button-card text-center font-weight-bold center">{{ $t('equipments.show') }}</div>
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
import _ from 'lodash';
export default {
    data() {
        return {
            categories: [],
            equipments: [],
            root: [],
            locale: this.$i18n.locale,
            selectCategory: this.$route.params.category || '',
            inputSearch: '',
        };
    },
    mounted(){
        this.loadEquipments();
    },
    methods: {
        async loadEquipments() {
            const response = await this.$apollo.query({
                query: gql(`
                    {
                        getAllEquipments{
                            id, 
                            title_ru, 
                            title_en, 
                            image, 
                            category{
                                id, 
                                marker
                            }
                        },
                        getAllCategories{
                            id, 
                            marker, 
                            title_ru, 
                            title_en
                        }
                    }
                `)
            })
            this.equipments = response.data.getAllEquipments;
            this.categories = response.data.getAllCategories;

            //made switcher for multi-language categories titles

            this.categories.forEach(element => {

                if(this.locale == 'ru'){
                    element["title"] = element.title_ru;
                }else{
                    if(this.locale == 'en'){
                        element["title"] = element.title_en;
                    }
                }

            });
        },
        onChange(event){
            let marker = event.target.value;
            history.replaceState(null, null, `/equipments/${marker}`);
        }
    },
    computed: {
        filteredProducts: function() {

            //made switcher for multi-language equipments titles

            this.equipments.forEach(element => {

                if(this.locale == 'ru'){
                    element["title"] = element.title_ru;
                }else{
                    if(this.locale == 'en'){
                        element["title"] = element.title_en;
                    }
                }

            });

            var filtered = this.equipments

                // filter category
                .filter(equipment => {
                    return this.selectCategory == '' || equipment.category.marker == this.selectCategory;
                })

                // filter by input
                .filter(equipment => {
                    return this.inputSearch == '' || equipment.title.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1;
                });

            // sorting    
            var sorted = _.sortBy(filtered, equipment => {
                return Number(equipment[this.sortKey]);
            });

            return filtered;
        },

    },
};
</script>

<style lang="scss" scoped>
#equipments{

    padding-bottom: 20px;
    min-height: 100vh;

    //filter

    #filter{

        //common

        height: auto;
        background-color: #1f1c38;

        .fa-search{
            color: #fff;
        }
        .form-control{
            color: #fff;
        }
        select{
            &:hover{
                cursor: pointer;
            }
        }
        option{
            &:hover{
                cursor: pointer;
            }
        }

        //adaptive queryies

        @media (min-width: 1501px) {
            select{
                max-width: 400px;
            }
        }

        @media (max-width: 768px){
            #search-block{
                margin-top: 20px;
            }
        }
    }

    //list equipments

    .card{
        border-radius: 10px;
        border: 1px solid grey;
    }
    .button-card{
        border: 1px solid #1f1c38;
        border-radius: 10px;
        padding: 0.5em 1em;
        transition: 0.3s;
        margin: auto;
        color: #000;
        &:hover{
            color: #fff;
            background-color: #1f1c38;
        }
    }

    //adaptive queryies

	@media (min-width: 1501px) {
        .card{
            margin: 10px;
            max-height: 500px;
        }
        .card-img{
            height: 280px !important;
            padding: 20px;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 50px;
        }
        .wrapper-link{
            width: 150px;
            margin: auto;
        }
        .button-card{
            width: 150px;
        }
    }

	@media (min-width: 1200px) and (max-width: 1500px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 200px !important;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 50px;
        }
        .wrapper-link{
            width: 150px;
            margin: auto;
        }
        .button-card{
            width: 150px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 180px !important;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 46px;
        }
        .wrapper-link{
            width: 150px;
            margin: auto;
        }
        .button-card{
            width: 150px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 180px !important;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 46px;
        }
        .wrapper-link{
            width: 150px;
            margin: auto;
        }
        .button-card{
            width: 150px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .card{
            max-height: 400px;
        }
        .card-img{
            height: 180px !important;
            width: 100%;
        }
        p{
            font-size: 0.9em;
        }
        .card-text-wrapper{
            height: 46px;
        }
        .wrapper-link{
            width: 150px;
            margin: auto;
        }
        .button-card{
            width: 150px;
        }
    }

    @media (max-width: 575px) {
        .col-6{
            padding: 10px !important;
        }
        .card{
            max-height: 400px;
            padding: 0px !important;
        }
        .card-img{
            height: 100px !important;
            width: 100%;
        }
        p{
            font-size: 0.7em;
        }
        .card-text-wrapper{
            height: 52px;
        }
        .wrapper-link{
            width: 100px;
            margin: auto;
            font-size: 0.8em !important;
        }
        .button-card{
            margin: auto;
            width: 100px;
            padding: 0.2em !important;
        }
    }

}
</style>