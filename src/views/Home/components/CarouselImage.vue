<template>
  <div class="relative slide h-24 mx-3 mb-4 sm:h-28 md:h-56 lg:h-80">
    <div class="carousel-inner relative overflow-hidden w-full">
      <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" 
        :class="`${active === i ? 'active' : 'left-full'}`"
        class="carousel-item inset-0 relative w-full  transition-all duration-500 ease-in-out">
        <div class="flex w-full">
          <img class="block w-1/2" :src="img" />
          <img class="block w-1/2" :src="images[i+1] ? images[i+1] : images[0]" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  props: {
    images: {
      type: Array,
      default: []
    },
  },
  computed: {
  }
})
export default class carouselImage extends Vue {
  readonly images!: string[]

  private active = 0
  mounted(): void {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 5000);
  }
}
</script>

<style>
.left-full {
  left: -100%;
}
.right-full {
  right: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  /* backface-visibility: hidden; */
}

.carousel-item.active {
  left: 0;
}</style>
