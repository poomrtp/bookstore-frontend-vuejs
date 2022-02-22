<template>
  <div class="max-w-5xl mx-auto px-6">
    <div class="border-b border-gray ">
      <detail-header></detail-header>
    </div>
    <div class="grid grid-cols-2">
      <div>
        <image-preview></image-preview>
      </div>
      <div>
        <price-detail></price-detail>
      </div>
    </div>
    <div class="grid grid-cols-2 border-b border-gray ">
      <div class="m-4">
        เรื่องย่อ
        <span>[ DESCRIPTION ]</span>
      </div>
      <div class="ml-28 m-4">
        <div class="grid grid-cols-3">
          <div class="col-span-3">
            ข้อมูลหนังสือ
          </div>
          <div class="">
            เรื่อง: 
          </div>
          <div class="col-span-2">
            [ TITLE ]
          </div>
          <div class="">
            ภาพ: 
          </div>
          <div class="col-span-2">
            [ ILLUSTRATOR ]
          </div>
          <div class="">
            สำนักพิมพ์: 
          </div>
          <div class="col-span-2">
            [ PUBLISHER ]
          </div>
          <div class="">
            Genres: 
          </div>
          <div class="col-span-2">
            [ GENRES ]
          </div>
          <div class="">
            น้ำหนัก: 
          </div>
          <div class="col-span-2">
            [ WEIGHT ]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DetailHeader from './components/DetailHeader.vue'
import ImagePreview from './components/ImagePreview.vue'
import PriceDetail from './components/PriceDetail.vue'

@Options({
  components: {
    DetailHeader,
    ImagePreview,
    PriceDetail
  }
})
export default class Detail extends Vue {

}
</script>

<style></style>