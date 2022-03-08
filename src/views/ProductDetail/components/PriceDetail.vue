<template>
  <div class="flex bg-white h-fit">
    <div class="flex flex-col w-full">
      <div class="flex flex-row">
        <div class="w-3/5 border mr-1 bg-gray-100">
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
            หนังสือเล่ม
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
            {{ product.price }}
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
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
                <select v-model="quantitySelected" class="w-14 h-9">
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
        <div 
          v-for="(type, index) in productTypes"
          :key="type"
          class="mr-2">
          <div 
            :class="productTypeActive(index)"
            class="text-sm w-28 font-bold text-center uppercase 
            text-blue-500 bg-gray-50 py-4 my-2 rounded"
            @click="onSelectProductType(index)">
            <p>{{ type.type }}</p>
            <p>{{ type.price }}</p>
          </div>
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
    product: {
      type: Object,
      default: () => null
    }
  }
})
export default class PriceDetail extends Vue {
  readonly product!: any

  private quantitySelected = 1
  private productTypeSelected = 0
  private maxQuantity = 10
  private quantitySelect = 0
  private showQuantityList = false
  private productTypes = [
    {
      type: 'หนังสือเล่ม',
      price: this.product.price || 0
    },
    {
      type: 'อีบุ๊ค',
      price: this.product.digitalPrice || 0
    },

  ]

  activateQuantityList(status: boolean) : boolean {
    return this.showQuantityList = status
  }

  onSelectQuantity(value: number): void {
    this.quantitySelected = value
    this.activateQuantityList(false)
  }

  onSelectProductType(index: number): void {
    this.productTypeSelected = index
  }

  productTypeActive(index: number): string {
    return index === this.productTypeSelected ? 'bg-white border border-blue-500 focus: bg-white hover:border-blue-500' : 
    'bg-gray-100 border border-gray hover:border-blue-500'
  }

}
</script>

<style>

</style>
