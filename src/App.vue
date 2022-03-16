<template>
  <div>
    <component
      v-if="$route.meta.layout"
      :accountItems="accountItems"
      :is="layout()">
    </component>
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
import Menubar from './router/layouts/Menubar.vue'

@Options({
  components: {
    
  },
  computed: {
    ...mapState('Cart', ['cart'])
  }
})
export default class Home extends Vue {

  private isActive = false

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

  layout():any {
    console.log(this.$route.meta.layout)
    const layout = this.$route.meta.layout || ''
    return Menubar
  }

}
</script>
<style></style>
