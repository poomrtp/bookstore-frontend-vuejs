<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 w-80">
      <div class="text-xl font-bold w-full text-center my-6">
          Bookstore
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions } from 'vuex'

@Options({
  components: {

  },
  methods: {
    ...mapActions({
      logout: 'User/logout'
    })
  }
})
export default class Logout extends Vue {
  readonly logout!: any

  async created(): Promise<void>  {
    await this.logout()
    this.$router.push({ path: '/' })
  }
}
</script>

<style>
._price-color {
  background-color: #ef5e24;
}
</style>
