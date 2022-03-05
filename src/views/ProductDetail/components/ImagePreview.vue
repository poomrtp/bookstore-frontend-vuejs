<template>
  <div class="w-full">
    <div class="flex justify-center h-96">
      <img :src="images[0]" class="w-auto h-96">
    </div>
    <div class="flex flex-wrap justify-center h-24 overflow-hidden mt-4">
      <div class="m-1" v-for="(image, index) in images" :key="image">
        <img :src="image" alt="" class="w-24 object-scale-down overflow-hidden" @click="onClickImage(index)">
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
      default: ['']
    }
  },
  emits: [
    'clickImagePreview'
  ]
})
export default class ImagePreview extends Vue {
  readonly images!: Array<any>

  onClickImage(index: number): void {
    this.$emit('clickImagePreview', index)
  }
  
}
</script>

<style></style>