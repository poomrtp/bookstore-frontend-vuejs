<template>
  <div class="flex items-end justify-end">
    <div 
      class="z-20
        top-0 fixed
        h-screen w-9/12 lg:w-72 
        bg-white 
        overflow-y-auto
        "
      :class="isActive ? 'right-0 duration-300 ease-out' : '-right-96 duration-300 ease-out'">
      <nav role="navigation" class="p-6">
        <div class="flex justify-center gap-4 pb-4 w-full">
          <button>สั่งซื้อสินค้า</button>
        </div>

        <div class="relative">
          <form action="" class="text-gray-500 focus-within:text-cyan-400 focus-within:bg-white focus-within:shadow rounded search transition duration-300">
            <div class="relative w-full">
              <input type="search" placeholder="Rechercher" name="search" id="search" class="text-sm text-gray-500 placeholder-gray-500 w-full rounded py-3 pr-4 pl-12 bg-gray-200 bg-opacity-75 outline-none focus:bg-transparent focus:rounded-3xl transition-all" />
            </div>
          </form>
        </div>

        <div class="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden">
          <span class="uppercase px-4 text-gray-500">Docs</span>
          <ul class="space-y-4 mb-12 px-4 mt-8">
            <li>
              <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                <img src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/icons/favorites.svg" class="w-6" alt="" />
                Documentation
              </a>
            </li>
            <li>
              <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                <img src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/icons/atom.svg" class="w-6" alt="" />
                Atomic css
              </a>
            </li>
            <li>
              <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                <img src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/icons/molecule.svg" class="w-6" alt="" />
                Atomic Design
              </a>
            </li>
            <li>
              <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition">
                <img src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/icons/template.svg" class="w-6" alt="" />
                Default look
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="z-10 fixed top-0 w-full h-screen bg-gray-900 bg-opacity-30 transition-all duration-300"
      :class="isActive ? '' : 'hidden'" @click="onBlur"></div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
  },
  emits: [
    'onActiveCartbar'
  ]
})
export default class Detail extends Vue {
  readonly isActive!: boolean
  // async created(): Promise<void> {

  // }
  onBlur():void {
    this.$emit('onActiveCartbar', false)
  }
}
</script>
<style>

</style>