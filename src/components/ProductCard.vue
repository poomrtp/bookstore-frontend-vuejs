<template>
  <!-- COMPONENT CODE -->
  <div class="flex shadow w-full min-h-full bg-white max-w-xs cursor-pointer">
    <div class="flex flex-col w-full">
      <div
        class="w-full flex flex-col h-48 min-h-48 bg-white overflow-hidden rounded-md mt-2">
        <img
          :src="product.image"
          class="w-auto object-scale-down overflow-hidden  mx-2"
        />
      </div>
      <div class="mx-2 h-52">
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
      <div class="flex justify-between mx-2 mb-4">
        <div>
          {{ product.price }}
        </div>
        <div>
          {{ product.category || 'E-book' }}
        </div>
      </div>
    </div>
  </div>
  <!-- COMPONENT CODE -->
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
export default class ProductCart extends Vue {}
</script>

<style></style>
