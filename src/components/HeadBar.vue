<template>
  <div>
    <nav class="relative flex flex-wrap items-center justify-between px-0 py-3 mb-3">
      <div class="flex justify-center w-full mt-3">
        <div class="container lg:max-w-7xl mx-auto flex flex-wrap items-center justify-between my-3">
          <div
            class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
          >
            <a
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              Bookstore
            </a>
            <button
              class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span class="block relative w-6 h-px rounded-sm bg-white"></span>
              <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
            <div
              class="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto"
            >
              <div class="flex">
                <span
                  class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-blueGray-600 rounded-md text-sm bg-white items-center rounded-r-none pl-2 py-1 text-blueGray-800 border-r-0 placeholder-blueGray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                class="px-2 py-1 h-8 border border-solid border-blueGray-600 rounded-md text-sm leading-snug text-blueGray-700 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-blueGray-300"
                placeholder="Search"
              />
            </div>
            <div class="flex flex-col lg:flex-row list-none">
              <div class="nav-item">
                <div class="dropdown relative">
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </a>
                  <div class="dropdown-menu absolute hidden text-black pt-2 -ml-24 w-52 border">
                    <a v-for="(item, index) in accountItems" :key="(index)" class="bg-white hover:bg-gray-50 py-2 px-4 block whitespace-no-wrap" href="#">
                      {{ item.title }}
                    </a>
                  </div>
                </div>
              </div>
              <div class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- minor menu -->
      <div class="flex justify-center w-full border-t border-b border-gray mt-3">
        <div class="container lg:max-w-7xl flex flex-wrap items-center justify-between">
          <div class="lg:flex flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none mr-auto">
              <li class="nav-item">
                <a
                  class="px-4 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span>shop</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="px-3 py-2 flex items-center text-md uppercase leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span class="ml-2">event</span>
                </a>
              </li>
            </ul>
            <ul class="flex flex-col lg:flex-row list-none ml-auto">
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
  props: {
    msg: String
  }
})
export default class HeadBar extends Vue {
  private showAccountDropdown = false
  private accountItems = [
    {
      title: "Your Account",
      path: ""
    },
    {
      title: "Your Order",
      path: ""
    },
    {
      title: "Your E-Book",
      path: ""
    },
    {
      title: "Redeems",
      path: ""
    },
    {
      title: "Logout",
      path: ""
    }
  ]

  activateAccountDropdown() : boolean {
    return this.showAccountDropdown = !this.showAccountDropdown
  }
}
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
