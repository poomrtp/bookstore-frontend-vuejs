<template>
  <div class="flex-auto w-full">
    <div class="flex flex-col max-h-96">
      <img
        :src="images[0]"
        class="w-auto object-scale-down overflow-hidden">
    </div>
    <div class="flex flex-wrap justify-center h-24 overflow-hidden mt-4">
      <div class="m-1" v-for="(image, index) in images" :key="image">
        <img
          :src="image"
          class="w-24 object-scale-down overflow-hidden"
          @click="onSelectImage(true, index)">
      </div>
    </div>
  </div>
  <preview-image-modal
    :isActive="isActive"
    :images="images"
    :imageIndex="imageIndex"
    @onActivePreviewImageModal="onActivePreviewImageModal($event)"
    @changeImageIndex="selectedImage($event)">
  </preview-image-modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import PreviewImageModal from '@/components/PreviewImageModal.vue'

@Options({
  components: {
    PreviewImageModal
  },
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
export default class PreviewImage extends Vue {
  readonly images!: Array<any>
  private isActive = false
  private imageIndex = 0

  onSelectImage(status: boolean, index: number): void {
    this.onActivePreviewImageModal(status)
    this.selectedImage(index)
  }

  onActivePreviewImageModal(status: boolean): void {
    this.isActive = status
  }
  selectedImage(index: number): void {
    this.imageIndex = index
  }
  
}
</script>

<style></style>