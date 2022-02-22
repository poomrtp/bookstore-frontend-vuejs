<template>
  <div class="max-w-5xl mx-auto px-6">
    <div class="">
      <detail-header></detail-header>
      <div>
        <image-preview></image-preview>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DetailHeader from './components/DetailHeader.vue'
import ImagePreview from './components/ImagePreview.vue'

@Options({
  components: {
    DetailHeader,
    ImagePreview
  }
})
export default class Detail extends Vue {

}
</script>

<style></style>