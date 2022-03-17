<template>
  <div
    class="flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
    <div class="flex">
      <span
        class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-blueGray-600 rounded-md text-sm bg-white items-center rounded-r-none pl-2 py-1 text-blueGray-800 border-r-0 placeholder-blueGray-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      </span>
    </div>
    <input
      type="text"
      class="px-2 py-1 h-8 border border-solid border-blueGray-600 rounded-md text-sm leading-snug text-blueGray-700 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-blueGray-300"
      placeholder="Search"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  props: {
    iconPath: {
      type: String,
    }
  },
  computed:{
    setIcon() {
      return require('../assets/icons/user.svg')
    }
  }
})
export default class InputBox extends Vue {}
</script>
