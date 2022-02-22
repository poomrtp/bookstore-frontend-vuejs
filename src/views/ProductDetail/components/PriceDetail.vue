<template>
  <div class="flex bg-white w-40 lg:w-64 xl:w-full mt-0 h-fit mx-0 p-5">
    <div class="flex flex-col w-full">
      <div class="bg-gray-100 ">
        <div class="mx-2">
          <div class="text-sm font-bold uppercase text-green-600 my-2 ">
            Account
          </div>
          <div class="text-sm text-start">submenu</div>
        </div>
      </div>
      <div class="bg-gray-50 ">
        <div class="mx-2">
          <div class="text-sm font-bold uppercase text-green-600 my-2 ">
            submenu1
          </div>
          <div class="text-sm text-start">submenu1</div>
          <div class="text-sm text-start">submenu2</div>
          <div class="text-sm text-start">submenu3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class PriceDetail extends Vue {}
</script>

<style></style>
