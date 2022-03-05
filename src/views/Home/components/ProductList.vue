<template>
  <div class="mx-3">
    <div
      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b border-gray"
      id="tabs-tab"
      role="tablist"
    >
      <div class="nav-item " role="presentation" v-for="(item, index) in tabItems" :key="index">
        <div
          href="#tabs-home"
          class="nav-link block font-medium text-xs leading-tight uppercase px-6 py-3 -mb-px hover:bg-white"
          :class="tabActive(index)"
          id="tabs-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-home"
          role="tab"
          aria-controls="tabs-home"
          aria-selected="true"
          @click="tabOption(index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4 mx-3">
    <div v-for="product in products" :key="product">
      <product-card :product="product" @click="onClickDetail(product.name)"></product-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ProductCard from '../../../components/ProductCard.vue'


@Options({
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  emits: [
    'clickDetail'
  ]
})
export default class ProductList extends Vue {
  private tabItems: Array<any> = [
    {
      name: 'New items',
      path: ''
    },
    {
      name: 'Books',
      path: ''
    }
  ]
  private tabSelect = 0
  

  tabActive(index: number) : string {
    return index === this.tabSelect ? 'bg-white border-t border-l border-r border-gray focus: bg-white' : 'bg-gray-100 border-t border-l border-r border-b border-gray '
  }

  tabOption(index : number) : number {
    return this.tabSelect = index
  }

  onClickDetail (name: string): void {
    console.log('name', name)
    this.$emit('clickDetail', name)
  }

}
// import { defineComponent } from 'vue'

// export default defineComponent({
//   components: {
//     ProductCard
//   },
//   props: {
//     products: {
//       type: Array,
//       default: () => []
//     }
//   },
//   data() {
//     return {
//       tabItems: [
//         {
//           name: 'New items',
//           path: ''
//         },
//         {
//           name: 'Books',
//           path: ''
//         }
//       ],
//       tabSelect: 0
//     }
//   },
//   methods: {
//     tabActive(index: number) : string {
//       return index === this.tabSelect ? 'bg-white border-t border-l border-r border-gray focus: bg-white focus: transition duration-150 ease-in-out' : 'bg-gray-100 border-t border-l border-r border-b border-gray '
//     },
//     tabOption(index : number) : number {
//       return this.tabSelect = index
//     }
//   }
// })
</script>

<style></style>
