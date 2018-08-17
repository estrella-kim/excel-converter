<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="i in 5" :key="i">
      <img :src="imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props : {
      imgUrl : String
    },
    data () {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          speed: 400,
          spaceBetween : 10,
        }
      }
    },
    components : {
      swiper,
      swiperSlide,
    },
    computed : {
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
