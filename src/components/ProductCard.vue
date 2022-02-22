<template>
  <!-- COMPONENT CODE -->
  <div class="flex shadow bg-white max-w-xs cursor-pointer">
    <div class="flex flex-col">
      <div
        class="w-full flex flex-col min-h-40 bg-white rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 "
      >
        <img
          src="https://cdn1.mangaqube.com/3ImZqLEzeL2iUjiN_l"
          class="w-auto h-40 object-scale-down lg:w-auto lg:h-full mx-2"
        />
      </div>
      <div class="mx-2">
        <div class="">
          <span class="text-sm font-bold uppercase text-green-600 my-2">
            Manga
          </span>
        </div>
        <span class="text-sm text-start">สารภาพรักกับคุณคางุยะซะดีๆ ~สงครามประสาทความรักของเหล่าอัจฉริยะ~ 20</span>
        <p class="text-xs text-start my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="flex justify-between mx-2 mb-4">
        <div>
          $ 300
        </div>
        <div>
          E-book
        </div>
      </div>
    </div>
  </div>
  <!-- COMPONENT CODE -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {}
})
export default class ProductCart extends Vue {}
</script>

<style></style>
