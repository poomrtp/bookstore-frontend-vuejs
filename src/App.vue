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
import { mapState,mapActions } from 'vuex'
import authUtil from './utils/auth.util'
import Menubar from './router/layouts/Menubar.vue'

@Options({
  components: {
    
  },
  computed: {
    ...mapState('Cart', ['cart'])
  },
  methods: {
    ...mapActions({
      getUser: 'User/getUser'
    })
  }
})
export default class Home extends Vue {

  readonly getUser!: any

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
      path: "/logout"
    }
  ]
  async mounted(): Promise<any> {
    const decodeUser = authUtil.getAuthDecode()
    console.log('decodeUser', decodeUser)
    if (decodeUser) {
      try {
        const user = await this.getUser({ username: decodeUser.username })
        console.log('user', user)
        // if (!user) {
        //   this.$router.push({ name: 'Login' })
        // }
        // this.setUser(user)
      } catch (error) {
        console.error('[created] decodeUser', error)

      } finally {
        // console.log('user', user)
      }
    }
  }

  layout():any {
    const layout = this.$route.meta.layout || ''
    return Menubar
  }

}
</script>
<style></style>
