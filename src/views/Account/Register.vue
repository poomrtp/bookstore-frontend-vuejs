<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 w-80">
      <div class="text-xl font-bold w-full text-center my-6">
          Bookstore
      </div>
      <div class="border-2 border-gray-200 min-h-full bg-white max-w-xs rounded-md p-6">
        <form @submit.prevent="submitUserForm()">
          <div class="text-2xl font-semibold mb-6">
            REGISTER
          </div>
          <label class="text-md font-medium">Username</label>
          <div
            class="flex w-full h-11 bg-white border border-gray-200 rounded-md mb-4 focus-within:border-blue-300">
            <div class="flex">
              <span
                class="font-normal flex text-center  rounded-md text-sm bg-white items-center  pl-2 py-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            <input
              v-model="dataForm.username"
              type="text"
              class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
              placeholder="Username"
              required/>
          </div>
          <label class="text-md font-medium">Password</label>
          <div
            class="flex w-full h-11 bg-white border border-gray-200 rounded-md focus-within:border-blue-300">
            <div class="flex">
              <span
                class="font-normal flex text-center rounded-md text-sm bg-white items-center  pl-2 py-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            <input
              v-model="dataForm.password"
              type="password"
              class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
              placeholder="Password"
              required/>
          </div>
          <label class="text-md font-medium">Confirm Password</label>
          <div
            class="flex w-full h-11 bg-white border border-gray-200 rounded-md pl-7 focus-within:border-blue-300">
            <input
              v-model="confirmPassword"
              type="password"
              class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
              placeholder="Password Confirmation"
              required/>
          </div>
          <div class="border-b border-gray-300 my-6"></div>
          <label class="text-md font-medium">Email</label>
          <div
            class="flex w-full h-11 bg-white border border-gray-200 rounded-md focus-within:border-blue-300">
            <div class="flex">
              <span
                class="font-normal flex text-center rounded-md text-sm bg-white items-center  pl-2 py-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
            <input
              v-model="dataForm.email"
              type="text"
              class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
              placeholder="Email"
              required/>
          </div>
          <label class="text-md font-medium">Full Name</label>
          <div
            class="flex w-full h-11 bg-white border border-gray-200 rounded-md pl-7 focus-within:border-blue-300">
            <input
              v-model="dataForm.fullname"
              type="text"
              class="px-2 py-1 h-full rounded-md text-sm text-black w-full font-normal placeholder-gray-300 flex-1 focus:outline-none"
              placeholder="Full Name"
              required/>
          </div>
          <button class="w-full bg-blue-500 text-white rounded py-1 mb-w mt-8" type="submit">ดำเนินการต่อ</button>
        </form>
      </div>
      <div class="text-md text-blue-600 w-full text-center my-6">
        <router-link to="/account">
          กลับไปหน้า Login
        </router-link>
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
      createAccount: 'User/createAccount'
    })
  }
})
export default class Register extends Vue {
  readonly createAccount!:any
  private confirmPassword = ''
  private dataForm = {
    fullname: '',
    username: '',
    password: '',
    email: ''
  }

  async submitUserForm(): Promise<void> {
    if (this.validate()) {
      await this.createAccount(this.dataForm)
      this.$router.push({ path: '/account' })
    }
  }
  validate(): boolean {
    if(this.dataForm.password !== this.confirmPassword) return false
    return true
  }
}
</script>

<style>
</style>
