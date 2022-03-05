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
              <div class="flex justify-center">
                <div>
                  <button
                    class="
                      dropdown
                      px-2
                      py-2.5
                      bg-white
                      text-black
                      border
                      border-gray
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      hover:bg-gray-50
                      focus:bg-gray-50 focus:ring-0
                      active:bg-gray-50 active:text-white
                      transition
                      duration-150
                      ease-in-out
                      flex
                      items-center
                      whitespace-nowrap
                    "
                    type="button"
                    @click="activateQuantityList(!showQuantityList)"
                  >
                    {{ quantitySelected }}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      class="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    v-if="showQuantityList"
                    class="
                      dropdown-menu
                      min-w-max
                      absolute
                      bg-white
                      text-base
                      z-50
                      float-left
                      py-2
                      list-none
                      text-left
                      rounded-lg
                      shadow-lg
                      mt-1
                      m-0
                      bg-clip-padding
                      border-none
                    "
                    @blur="activateQuantityList(false)">
                    <div
                      v-for="(value) in maxQuantity" :key="value"
                      class="w-20">
                      <span
                        class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          text-gray-700
                          hover:bg-gray-100
                          cursor-pointer
                        "
                        @click="onSelectQuantity(value)">
                        {{ value }}
                      </span>
                    </div>
                  </div>
                </div>
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
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
