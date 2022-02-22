<template>
  <div class="flex bg-white mt-0 h-fit mx-0 p-5">
    <div class="flex flex-col w-full">
      <div class="flex flex-row">
        <div class="w-3/5 border mr-1 bg-gray-100">
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
            [ BOOK TYPE ]
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
            [ BOOK PRICE ]
          </div>
          <div class="flex justify-center text-sm font-bold uppercase text-black m-2 ">
            [ DISCOUNT ]
          </div>
        </div>
        <div class="w-2/5 border ml-1 bg-gray-100">
          <div class="flex flex-col justify-center text-sm font-bold uppercase text-black m-2">
            <div class="flex justify-center">
              [ QUANTITY ]
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
                    @click="activateQuantityList(true)"
                    @blur="activateQuantityList(false)"
                  >
                    [ VALUE ]
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
                    ">
                    <div v-for="(index) in maxQuantity" :key="index"
                      class="w-20">
                      <a
                        class="
                          dropdown-item
                          text-sm
                          py-2
                          px-4
                          font-normal
                          block
                          w-full
                          whitespace-nowrap
                          bg-transparent
                          text-gray-700
                          hover:bg-gray-100
                        "
                        href="#"
                        >{{ index }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
export default class PriceDetail extends Vue {
  private maxQuantity = 10
  private quantitySelect = 0
  private showQuantityList = false

  activateQuantityList(status: boolean) : boolean {
    return this.showQuantityList = status
  }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
