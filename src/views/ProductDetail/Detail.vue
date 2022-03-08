<template>
  <div class="max-w-5xl mx-auto px-6 w-full">
    <div class="border-b border-gray ">
      <detail-header :product="product"></detail-header>
    </div>
    <div class="grid grid-cols-2">
      <div class="m-5">
        <image-preview :images="product.images"></image-preview>
      </div>
      <div class="m-5">
        <price-detail
          :product="product"
          :typeSelected="typeSelected"
          @onSelectProductType="onSelectProductType"></price-detail>
      </div>
    </div>
    <div class="grid grid-cols-2 border-b border-gray ">
      <div class="m-4">
        เรื่องย่อ
        <p>{{ product.description || "-"}}</p>
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
            {{ product.name }}
          </div>
          <div class="">
            ภาพ: 
          </div>
          <div class="col-span-2">
            {{ productAuthor }}
          </div>
          <div class="">
            สำนักพิมพ์: 
          </div>
          <div class="col-span-2">
            {{ product.publisher }}
          </div>
          <div class="">
            Genres: 
          </div>
          <div class="col-span-2">
            {{ prodcutGenres }}
          </div>
          <div class="">
            น้ำหนัก: 
          </div>
          <div class="col-span-2">
            {{ product.weight }} กรัม
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <preview-image-modal></preview-image-modal> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import DetailHeader from './components/DetailHeader.vue'
import ImagePreview from './components/ImagePreview.vue'
import PriceDetail from './components/PriceDetail.vue'
import PreviewImageModal from '@/components/PreviewImageModal.vue'

@Options({
  components: {
    DetailHeader,
    ImagePreview,
    PriceDetail,
    PreviewImageModal
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    callBackQuery: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState('Product', ['product']),
    productAuthor() {
      return this.product.author ? this.product.author.join(', ') : '-'
    },
    prodcutGenres() {
      return this.product.genres ? this.product.genres.join(', ') : '-'
    }
  },
  methods: {
    ...mapActions({
      fetchProductsByName: 'Product/fetchProductsByName'
    })
  }
})
export default class Detail extends Vue {
  readonly fetchProductsByName!: any
  readonly product!: any
  readonly name!: any
  private isActivePreviewImageModal = false
  private typeSelected = 'book'

  async created(): Promise<void> {
    console.log(this.name)
    await this.fetchProductsByName(this.name)
    this.typeSelected = this.product.price ? 'book' : 'e-book'
    console.log('this.typeSelected', this.typeSelected)
    console.log('this.product', this.product)
  }

  onActivePreviewImageModal(): void {
    this.isActivePreviewImageModal = true
  }

  onSelectProductType(type: string): void {
    this.typeSelected = type
  }
}
</script>

<style></style>