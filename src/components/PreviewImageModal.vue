<template>
  <div
    class="flex justify-center w-full h-full z-20"
    :class="isActive ? '' : 'hidden'">
    <div class="fixed top-1/4 left-0 w-full sm:top-4">
      <div 
        class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 transition-all duration-300"
        :class="isActive ? '' : 'hidden'"
        @click="onBlur">
      </div>
      <div 
        class="relative mb-4"
        :class="isActive ? '' : 'hidden'">
        <div class="flex justify-center h-full">
          <img 
            :src="images[imageIndex]"
            class="w-96 h-auto cursor-pointer z-40">
        </div>
        <div class="flex flex-wrap justify-center h-24 overflow-hidden mt-4">
          <div class="m-1 " v-for="(image, index) in images" :key="image">
            <img 
              :src="image" alt=""
              class="w-24 object-scale-down overflow-hidden cursor-pointer" 
              :class="index === imageIndex ? '' : 'opacity-50'" 
              @click="onClickImage(index)">
          </div>
        </div>
      </div>
      <div class="fixed top-4 right-4 z-20 hover:opacity-75" @click="onBlur">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white hover:opacity-75 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 
              01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: [""]
    },
    imageIndex: {
      type: Number,
      default: 0
    }
  },
  emits: [
    'onActivePreviewImageModal',
    'changeImageIndex'
  ]
})
export default class ImagePreviewModal extends Vue {
  readonly isActive!: boolean
  private imageIndex!: number
  onClickImage(index: number): void {
    this.$emit('changeImageIndex', (index))
  }

  onBlur():void {
    this.$emit('onActivePreviewImageModal', false)
  }
}
</script>
<style>

</style>