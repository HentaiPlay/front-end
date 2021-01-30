<template>
    <section id="review">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div id="review-slider" class="carousel slide" data-ride="carousel">
                        <!--Slides-->
                        <div class="carousel-inner" role="listbox">
                            <div
                                v-for="(review, id) in reviews"
                                :key="review.id"
                                class="carousel-item"
                                :class="{ active: id == 0 }"
                            >
                                <div class="review-title">
                                    <p class="font-weight-bold">{{ review.title }}</p>
                                    <hr />
                                    <p class="font-weight-bold">{{ review.author }}<br />«{{ review.company }}»</p>
                                </div>
                                <div class="review-image flex-center">
                                    <img src="@/assets/images/main/client.jpg" />
                                </div>
                            </div>
                        </div>
                        <!--/.Slides-->
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
        reviews: [],
        locale: this.$i18n.locale,
    };
  },
  methods: {
      async loadReview() {
          const response = await this.$apollo.query({
              query: gql(`
                  {
                      getAllReviews{id, title_ru, title_en, author_ru, author_en, company_ru, company_en}
                  }
              `)
          })
          this.reviews = response.data.getAllReviews;

            //made switcher for multi-language categories titles

            this.reviews.forEach(element => {

                if(this.locale == 'ru'){
                    element["title"] = element.title_ru;
                    element["author"] = element.author_ru;
                    element["company"] = element.company_ru;
                }else{
                    if(this.locale == 'en'){
                        element["title"] = element.title_en;
                        element["author"] = element.author_en;
                        element["company"] = element.company_en;
                    }
                }

            });
      },
  },
  mounted() {
    this.loadReview();
  },
  computed:{

  }
};
</script>

<style lang="scss" scoped>
#review {

    //common

    height: auto;
    display: flex;
    justify-content: center;
    background: url("~assets/images/main/review-background.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;

    #review-slider {
        height: auto;
        background-color: rgba(245, 245, 245, 0.541);
    }
    .review-title{
        float: left;
    }
    .review-image{
        width: auto;
    }
    p {
        font-family: "Inter";
    }
    hr {
        width: 50px;
        border: 1px solid #424242;
    }
    img {
        border-radius: 50%;
        height: 100%;
        width: auto;
        filter: brightness(90%);
    }

    //adaptive queryies

    @media(min-width: 1501px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 60%;
        }
        .review-title{
            height: 100%;
            width: 60%;
        }
        .review-image{
            height: 170px;
            width: auto;
        }
        p {
            font-size: 1em;
        }
    }

    @media(min-width: 1200px) and (max-width: 1500px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 70%;
        }
        .review-title{
            height: 100%;
            width: 60%;
        }
        .review-image{
            height: 170px;
            width: auto;
        }
        p {
            font-size: 1em;
        }
    }

    @media(min-width: 992px) and (max-width: 1199px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }
        .review-title{
            height: 100%;
            width: 60%;
        }
        .review-image{
            height: 170px;
            width: auto;
        }
        p {
            font-size: 1em;
        }
    }

    @media(min-width: 768px) and (max-width: 991px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
        }
        .review-title{
            height: 100%;
            width: 60%;
        }
        .review-image{
            height: 170px;
            width: auto;
        }
        p {
            font-size: 1em;
        }
    }

    @media(min-width: 576px) and (max-width: 767px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        .review-title{
            height: 100%;
            width: 100%;
        }
        .review-image{
            display: none;
        }
        p {
            font-size: 1em;
        }
    }

    @media(max-width: 575px) {
        #review-slider {
            padding: 20px;
            min-height: 200px;
            min-width: 300px;
            margin-top: 75px;
            margin-bottom:75px;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        .review-title{
            height: 100%;
            width: 100%;
        }
        .review-image{
            display: none;
        }
        p {
            font-size: 0.9em;
        }
    }
}
</style>
