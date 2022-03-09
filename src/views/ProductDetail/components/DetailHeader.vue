<template>
  <div class="w-full">
    <div class="flex justify-center">
      <span>{{ product.category }}</span>
    </div>
    <div class="flex justify-center">
      <span>{{ product.name }}</span>
    </div>
    <div class="flex justify-evenly">
      <div>
        <span class="text-center">โดย {{ productAuthor }}</span>
      </div>
      <div>
        <span class="text-center">STAR</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  props: {
    product: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    productAuthor() {
      return this.product.author ? this.product.author.join(', ') : '-'
    }
  }
})
export default class DetailHeader extends Vue {
  // readonly product!: any
}
</script>

<style></style>