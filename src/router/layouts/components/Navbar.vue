<template>
  <div>
    <nav class="relative flex flex-wrap items-center justify-between px-0 py-3">
      <div class="flex justify-center w-full">
        <div class="container lg:max-w-7xl mx-auto flex items-center justify-between my-3">
          <div
            class="relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <router-link to="/">
              <a
                class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                href="#pablo">
                Bookstore
              </a>
            </router-link>
          </div>
          <div class="flex flex-grow justify-end items-center">
            <div
              class="flex sm:w-5/12 md:w-5/12 p-1 flex-wrap items-stretch  h-10 hover:w-12/12 ease-in-out
              bg-white border border-gray-200 rounded-md focus-within:border-blue-300 mr-6">
              <div class="flex">
                <span
                  class="font-normal flex text-center rounded-md text-sm bg-white items-center pl-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"/>
                  </svg>
                </span>
              </div>
              <input
                v-model="searchValue"
                type="text"
                class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
                placeholder="Search"
                @keydown.enter="onSearch()"/>
            </div>
            <div class="flex flex-row list-none">
              <div class="nav-item">
                <div v-if="isAuthentication" class="dropdown relative">
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </a>
                  <div class="dropdown-menu absolute hidden text-black pt-2 -ml-24 w-52 z-40 border">
                    <a 
                      v-for="(item, index) in accountItems" 
                      :key="(index)"
                      class="bg-white hover:bg-gray-50 py-2 px-4 block whitespace-no-wrap">
                      <router-link :to="item.path">
                        {{ item.title }}
                      </router-link>
                    </a>
                  </div>
                </div>
                <div v-else class="h-full">
                  <router-link to="/account">
                    <button
                      class="border border-gray-200 rounded px-4 h-full">
                      Login
                    </button>
                  </router-link>
                </div>
              </div>
              <div class="nav-item w-24" @click="onActiveCartbar(true)">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                  </svg>
                  <span class="px-2 bg-yellow-500 rounded text-white">{{ cartQuantity }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- minor menu -->
      <div class="flex justify-center w-full border-t border-b border-gray mt-3">
        <div class="container lg:max-w-7xl flex flex-wrap items-center justify-between">
          <div class="flex flex-grow items-center justify-between">
            <ul class="flex flex-row list-none justify-center md:justify-start">
              <li class="nav-item">
                <router-link to="/">
                  <a
                    class="px-4 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                    href="#pablo">
                    <span>shop</span>
                  </a>
                </router-link>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <span class="ml-2">event</span>
                </a>
              </li>
            </ul>
            <ul class="flex flex-row list-none invisible md:visible">
              <li class="nav-item">
                <a
                  class="px-4 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span>rewards</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span class="ml-2">faq</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span class="ml-2">contact us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  props: {
    accountItems: {
      type: Array,
      default: []
    },
    isAuthentication: {
      type: Boolean,
      default: false
    },
    cartQuantity: {
      type: Number,
      default: 0
    }
  },
  emits: [
    'onActiveCartbar',
    'onSearch'
  ]
})
export default class Headbar extends Vue {
  private isActive = false
  private showAccountDropdown = false
  private searchValue = ''

  onActiveCartbar(status: boolean): void {
    this.$emit('onActiveCartbar', status)
  }

  onSearch(): void {
    this.$emit('onSearch', this.searchValue)
  }

}
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
