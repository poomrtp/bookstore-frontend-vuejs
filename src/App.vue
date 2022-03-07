<template>
  <div>
    <cart-bar :isActive="isActive" @onActiveCartbar="onActiveCartbar($event)"></cart-bar>
    <head-bar @onActiveCartbar="onActiveCartbar($event)"></head-bar>
    <div class="flex justify-center w-full mt-3 my-6">
      <div class="w-full lg:max-w-7xl">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeadBar from '@/components/HeadBar.vue'
import CartBar from '@/components/CartBar.vue'

@Options({
  components: {
    HeadBar,
    CartBar
  }
})
export default class Home extends Vue {

  private isActive = false

  onBlur():void {
    console.log('onBlur')
  }
  onClick():void {
    console.log('onClick')
  }
  onActiveCartbar(status: boolean): void {
    this.isActive = status
  }

}
</script>
<style></style>
