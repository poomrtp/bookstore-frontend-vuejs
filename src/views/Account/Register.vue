<template>
  <div class="mx-auto">
    <div class="mx-auto border-2 border-gray-200 w-full min-h-full bg-white max-w-xs cursor-pointer rounded-md">
      <div>
        register
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class ProductCart extends Vue {}
</script>

<style>
._price-color {
  background-color: #ef5e24;
}
</style>
