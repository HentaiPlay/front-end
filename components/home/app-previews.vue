<template>
  <section id="previews">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3 class="font-weight-bold text-center mt-5">{{ $t('preview.title') }}</h3>
          <!--Carousel Wrapper-->
          <div
            id="preview-slider"
            class="carousel slide carousel-fade z-depth-1-half mt-5 mb-5"
            data-ride="carousel"
          >
            <!--Indicators-->
            <ol class="carousel-indicators">
              <li
                v-for="(preview, id) in previews"
                :key="preview.id"
                data-target="#preview-slider"
                :data-slide-to="id"
                :class="{ active: id == 0 }"
              ></li>
            </ol>
            <!--/.Indicators-->
            <!--Slides-->
            <div class="carousel-inner" role="listbox">
              <div
                v-for="(preview, id) in previews"
                :key="preview.id"
                class="carousel-item preview-slide"
                :class="{ active: id == 0 }"
              >
                <div class="view">
                  <img
                    class="d-block w-100"
                    :src="require('@/assets/images/previews/' + preview.image)"
                  />
                  <div class="mask rgba-black-strong"></div>
                </div>
                <div class="carousel-caption">
                  <p class="font-weight-bold">
                    {{ preview.title }}
                  </p>
                  <a
                    :href="preview.link"
                    target="_blank"
                    class="btn font-weigth-bold mt-4"
                    ><i class="fas fa-play mr-2"></i> <span class="font-weight-bold">{{ $t('preview.watch') }}</span></a
                  >
                </div>
              </div>
            </div>
            <!--/.Slides-->
            <!--Controls-->
            <a
              class="carousel-control-prev"
              href="#preview-slider"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#preview-slider"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
            <!--/.Controls-->
          </div>
          <!--/.Carousel Wrapper-->
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
      previews: [],
      locale: this.$i18n.locale,
    };
  },
  methods: {
    async loadPreview() {
        const response = await this.$apollo.query({
            query: gql(`
                {
                    getAllPreviews{id, link, image, title_ru, title_en}
                }
            `)
        })
        this.previews = response.data.getAllPreviews.reverse();

          this.previews.forEach(element => {

              if(this.locale == 'ru'){
                  element["title"] = element.title_ru;
              }else{
                  if(this.locale == 'en'){
                      element["title"] = element.title_en;
                  }
              }

          });
    },
  },
  mounted() {
    this.loadPreview();
  },
};
</script>

<style lang="scss" scoped>

#previews {

    //common 

    #preview-slider {
        padding: 0 !important;
        width: 100%;
        border-radius: 15px !important;

        .view {
            width: 100%;
            border-radius: 15px !important;
        }

        img {
            width: auto;
            object-fit: cover;
            border-radius: 15px;
        }

        .preview-slide a {
            padding: 1rem 2rem !important;
            border-radius: 30px;
            background-color: white;
            color: #424242;
            text-transform: none;
            &:hover{
                color: #000;
            }
        }

    }

    //adaptive queryies

	@media (min-width: 1501px) {
        #preview-slider {
            height: 700px;
            img {
                height: 700px;
            }
            p {
                font-size: 2.4em !important;
            }
            span{
                font-size: 1.2em;
            }
            .preview-slide a {
                font-size: 1em;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 75%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        #preview-slider {
            height: 600px;
            img {
                height: 600px;
            }
            p {
                font-size: 2rem !important;
            }
            span{
                font-size: 1em;
            }
            .preview-slide a {
                font-size: 1em;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 75%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        #preview-slider {
            height: 600px;
            img {
                height: 600px;
            }
            p {
                font-size: 2rem !important;
            }
            span{
                font-size: 1em;
            }
            .preview-slide a {
                font-size: 1em;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 75%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        #preview-slider {
            height: 600px;
            img {
                height: 600px;
            }
            p {
                font-size: 1.8rem !important;
            }
            span{
                font-size: 1em;
            }
            .preview-slide a {
                font-size: 1em;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 75%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        #preview-slider {
            height: 500px;
            img {
                height: 500px;
            }
            p {
                font-size: 1.2rem !important;
            }
            span{
                font-size: 1em;
            }
            .preview-slide a {
                font-size: 1em;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 75%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (max-width: 575px) {
        #preview-slider {
            height: 400px;
            img {
                height: 400px;
            }
            p {
                font-size: 0.8rem !important;
            }
            span{
                font-size: 1em;
            }
            .preview-slide a {
                font-size: 0.8em;
                padding: 0.5rem 1rem !important;
            }
            .carousel-caption {
                top: 55%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
            }
        }
    }

}
</style>
