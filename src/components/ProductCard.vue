<template>
  <div class="flex border-2 border-gray-200 w-full min-h-full bg-white max-w-xs cursor-pointer rounded-lg">
    <div class="flex flex-col w-full">
      <div
        class="w-full flex flex-col h-48 min-h-48 bg-white overflow-hidden rounded-md mt-2">
        <img
          :src="product.images[0]"
          class="w-auto object-scale-down overflow-hidden mx-2"
        />
      </div>
      <div class="mx-2 h-36">
        <div class="">
          <span class="text-sm font-bold uppercase text-green-600 my-2">
            {{ product.productType || 'Manga' }}
          </span>
        </div>
        <div>
          <span class="text-sm text-start">{{ product.name }}</span>
        </div>
        <div class="">
          <p class="text-xs text-start my-2">
            {{ product.author.join(', ') }}
          </p>
        </div>
      </div>
      <div class="flex flex-col mx-2 mb-1 h-16 justify-end">
        <div v-if="product.price" class="flex justify-between">
          <div class="mb-1 px-2 rounded bg-yellow-500 text-white">
            {{ product.price }}
          </div>
          <div>
            หนังสือ
          </div>
        </div>
        <div v-if="product.digitalPrice" class="flex justify-between">
          <div class="mb-1 px-2 rounded bg-yellow-500 text-white">
            {{ product.digitalPrice }}
          </div>
          <div>
            อีบุ๊ค
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
    }
  }
})
export default class ProductCart extends Vue {}
</script>

<style>
._price-color {
  background-color: #ef5e24;
}
</style>
