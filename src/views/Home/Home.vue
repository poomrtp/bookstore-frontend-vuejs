<template>
  <div class="grid grid-cols-7">
    <div class="col-span-5">
      <div class="grid grid-cols-1">
        <product-list></product-list>
      </div>
    </div>
    <div class="col-span-2 h-fit">
      <div class="flex justify-end">
        <account-detail></account-detail>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProductList from './components/ProductList.vue'
import AccountDetail from './components/AccountDetail.vue'

@Options({
  components: {
    ProductList,
    AccountDetail
  },
})
export default class Home extends Vue {}
</script>