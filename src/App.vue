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
import { AccountInterface } from '@/interfaces/account.interface'

@Options({
  components: {
    
  },
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapState('User', ['user'])
  },
  methods: {
    ...mapActions({
      getUser: 'User/getUser'
    })
  }
})
export default class Home extends Vue {

  readonly getUser!: any
  readonly user!: AccountInterface

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
  async mounted(): Promise<void> {
    const decodeUser = authUtil.getAuthDecode()
    if (decodeUser) {
      try {
        await this.getUser()
      } catch (error) {
        console.error('[created] decodeUser', error)

      }
    }
  }

  layout():any {
    const layout = this.$route.meta.layout || ''
    return layout ? Menubar : ''
  }

}
</script>
<style></style>
