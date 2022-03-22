<template>
  <div class="flex flex-col w-80">
    <div class="bg-gray-50 border border-gray-300 rounded-lg p-4 px-8">
      <div class="w-full flex justify-between">
        <span class="w-3/5">สินค้ารวม({{ order.totalItem || '-' }} รายการ):</span>
        <span class="min-w-fit">{{ order.totalPrice || '-' }} บาท</span>
      </div>
      <div class="w-full flex justify-between">
        <span class="w-3/5">ค่าส่งรวม:</span>
        <span class="min-w-fit">- บาท</span>
      </div>
      <div class="w-full flex justify-between">
        <span class="w-3/5">รวม:</span>
        <span class="min-w-fit text-red-500 text-2xl">{{ order.totalPrice || '-' }} บาท</span>
      </div>
      <button
          class="w-full p-2 bg-blue-400 bg-opacity-90 text-white rounded-full my-1 mt-2"
          @click="onSubmitCheckout">
          Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { OrderInterface } from '@/interfaces/order.interface'
import { PropType } from 'vue'

@Options({
  components: {},
  props: {
    order : {
      type: Object as PropType<OrderInterface>,
      default: {}
    }
  },
  emits: [
    'onSubmitCheckout'
  ]
})
export default class PaymentConfirm extends Vue {

  onSubmitCheckout(): void {
    this.$emit('onSubmitCheckout')
  }
}
</script>

<style></style>
