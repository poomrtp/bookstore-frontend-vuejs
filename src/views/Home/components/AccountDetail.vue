<template>
  <div class="flex bg-white border rounded-md w-full md:w-10/12  mt-0 h-fit mx-3">
    <div
      v-if="isAuthentication"
      class="flex flex-col w-full">
      <div class="bg-gray-100 p-4">
        <div class="text-xs text-gray-600">
          ยินดีต้อนรับ
        </div>
        <div class="text-2xl text-black text-start">{{ user.fullname || '-' }}</div>
      </div>
      <div class="bg-gray-50 px-4">
        <div class="text-gray-600 text-start py-1">แจ้งชำระเงิน</div>
        <div class="text-gray-600 text-start py-1">รายการสั่งซื้อสินค้าของฉัน</div>
        <div class="text-gray-600 text-start py-1">คำถามที่พบบ่อย</div>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col w-full">
      <div class="flex justify-center w-full bg-gray-100 text-gray-600 p-4">
        <router-link to="/account">
          <button class="px-4 py-2 bg-blue-600 text-white rounded">Login or Register</button>
        </router-link>
      </div>
      <div class="bg-gray-50 px-4">
        <div class="text-gray-600 text-start py-1">คำถามที่พบบ่อย</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
  props: {
    user: {
      type: Object,
      default: null
    },
    isAuthentication: {
      type: Boolean,
      default: false
    }
  }
})
export default class AccountDetail extends Vue {}
</script>

<style></style>
