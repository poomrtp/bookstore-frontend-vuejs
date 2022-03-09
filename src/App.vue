<template>
  <div>
    <head-bar></head-bar>
    <div class="flex justify-center w-full mt-3 my-6">
      <div class="w-full lg:max-w-7xl">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState } from 'vuex'
import HeadBar from '@/components/HeadBar.vue'

@Options({
  components: {
    HeadBar
  },
  computed: {
    ...mapState('Cart', ['cart'])
  }
})
export default class Home extends Vue {

  private isActive = false
  // private cart = []

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
