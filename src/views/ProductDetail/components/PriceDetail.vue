<template>
  <div class="flex bg-white h-fit">
    <div class="flex flex-col w-full">
      <div class="flex flex-row">
        <div class="w-3/5 border mr-1 bg-gray-100">
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2">
            {{ isBook ? 'หนังสือเล่ม' : 'อีบุ๊ค' }}
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2">
            {{ isBook ? product.price : product.digitalPrice }}
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2">
            ส่วนลด {{ product.discount || '-' }}
          </div>
        </div>
        <div class="w-2/5 border ml-1 bg-gray-100">
          <div class="flex flex-col justify-center text-sm font-bold uppercase text-black m-2">
            <div class="flex justify-center">
              จำนวน
            </div>
            <div class="flex justify-center">
              <div class="">
                <select 
                  v-model="quantitySelected" 
                  :disabled="typeSelected?.name === 'e-book' || false" 
                  class="w-14 h-9" 
                  @change="onSelectQuantity(quantitySelected)">
                  <option v-for="value in maxQuantity" :key="value">
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div v-for="type in product.types" :key="type"
          :class="productTypeActive(type)"
          class="text-sm w-28 font-bold text-center uppercase cursor-pointer
          bg-gray-50 py-4 my-2 mr-2 rounded"
          @click="onSelectProductType(type)">
          <p>{{ type.nameTH }}</p>
          <p>{{ type.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { PropType } from 'vue';
import { BookInterface, Type } from '@/interfaces/book.interface'

@Options({
  components: {},
  props: {
    product: {
      type: Object as PropType<BookInterface>,
      default: () => null
    },
    typeSelected: {
      type: Object as PropType<Type>,
      default: {}
    }
  },
  emits: [
    'onSelectProductType',
    'onSelectQuantity'
  ],
  computed: {
    isBook(): boolean {
      this.quantitySelected = 1
      return this.typeSelected?.name || true
  }
  }
})
export default class PriceDetail extends Vue {
  readonly product!: any
  readonly typeSelected!: Type

  private quantitySelected = 1
  private maxQuantity = 10
  private quantitySelect = 0

  onSelectQuantity(value: number): void {
    this.$emit('onSelectQuantity', +value)
  }

  onSelectProductType(productType: Type): void {
    this.$emit('onSelectProductType', productType)
  }

  productTypeActive(productType: Type): string {
    return productType.name === this.typeSelected.name ? 'bg-white text-black border-2 border-blue-500 focus: bg-white hover:border hover:border-border-blue-500' : 
    'bg-gray-100 text-gray-500 border border-gray-500 hover:border hover:border-blue-500 hover:text-black'
  }

}
</script>

<style>

</style>
