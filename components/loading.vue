<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="text-center mt-5 loader">
                    <div class="spinner-border" role="status">
                    </div>
                </div>
            </div>
        </div>   
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 99;
  }
</style>