<template>
  <head-bar></head-bar>
  <div class="flex justify-center w-full mt-3">
    <div class="w-full lg:max-w-7xl">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeadBar from '@/components/HeadBar.vue'

@Options({
  components: {
    HeadBar
  }
})
export default class Home extends Vue {}
</script>
<style></style>
