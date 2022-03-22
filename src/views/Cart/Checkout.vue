<template>
  <div class="max-w-5xl mx-auto">
    <!-- Payment
    <div class="bg-blue-300 p-2" @click="onSubmitCheckout">CONFIRM</div> -->
    <div class="grid grid-cols-8 justify-between mx-4">
      <div class="col-span-5">
        <account-detail :user="user" class="mb-4"></account-detail>
        <checkout-item-list :orderCheckout="order"></checkout-item-list>
      </div>
      <div class="col-span-3 h-fit invisible md:visible">
        <div class="flex justify-end">
          <payment-confirm :order="order" @onSubmitCheckout="onSubmitCheckout"></payment-confirm>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import PaymentConfirm from './components/PaymentConfirm.vue'
import CheckoutItemList from './components/CheckoutItemList.vue'
import AccountDetail from './components/AccountDetail.vue'
// import { CartInterface, CartItem, CartItemBySeller, FinalCartInterface } from "@/interfaces/cart.interface"
import { OrderInterface } from '@/interfaces/order.interface'

@Options({
  components: {
    AccountDetail,
    CheckoutItemList,
    PaymentConfirm
  },
  props: {

  },
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapState('Order', ['order']),
    ...mapState('User', ['user']),
  },
  methods: {
    ...mapActions({
      fetchCart: 'Cart/fetchCart',
      checkoutOrder: 'Order/checkoutOrder',
      fetchOrderByUser: 'Order/fetchOrderByUser'
    })
  }
})
export default class CartDetail extends Vue {
  readonly fetchCart!: any
  readonly checkoutOrder!: any
  readonly fetchOrderByUser!: any
  readonly order!: OrderInterface


  async created(): Promise<void> {
    await this.fetchCart()
    await this.fetchOrderByUser()
  }

  async onSubmitCheckout(): Promise<void> {
    try {
      // await this.checkoutOrder(this.order)
      // this.$router.push({ path: '/' })
      console.log('checkout success')
    } catch (error) {
      console.log(error)
    }
  }


}
</script>

<style></style>