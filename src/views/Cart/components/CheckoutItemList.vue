<template>
  <div class="bg-gray-50 border border-gray-300 rounded-lg w-full min-h-96 p-2">
    <div class="flex justify-between p-2">
      <div>
        รายการสินค้า
      </div>
      <div class="text-blue-500">
        <router-link to="/cart">
          แก้ไขรายการ
        </router-link>
      </div>
    </div>
    <div class="w-full p-2" v-for="order in orderCheckout.orders" :key="order">
      <div class="">
        <div class="text-xs">
          สินค้าจัดจำหน่ายโดย:
        </div>
        <div class="font-medium">
          {{ order.seller }}
        </div>
      </div>
      <div
        v-for="item in order.items"
        :key="item"
        class="flex justify-center w-fit border border-gray-300 bg-white p-2">
        <div class="flex-none justify-start items-center w-fit max-w-fit overflow-hidden">
          <img :src="item?.images[0]" alt="" class="flex items-start h-28 w-auto">
        </div>
        <div class="w-full pl-4">
          <div>
            {{ item.name }}
          </div>
          <div class="text-xs">
            {{ item.type.nameTH }}
          </div>
          <div class="flex justify-between w-full py-4">
            <div>
              จำนวน: {{ item.quantity }}
            </div>
            <div>
              {{ item.totalPrice }} บาท
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { PropType } from 'vue';
import { OrderInterface } from '@/interfaces/order.interface'

@Options({
  components: { 
  },
  props: {
    orderCheckout: {
      type: Object as PropType<OrderInterface>,
      default: () => null
    }
  },
  emits: [
    'onSelectQuantity',
    'onRemoveItem'
  ],
  computed: {

  },
  methods: {
    
  }
})

export default class CheckoutItemList extends Vue {}
</script>