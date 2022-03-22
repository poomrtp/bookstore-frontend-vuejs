<template>
  <div class="bg-gray-50 border border-gray-300 rounded-lg w-full h-36 p-2">
    <div class="flex justify-between p-2">
      <div>
        ข้อมูลติดต่อสำหรับระบบชำระเงิน
      </div>
      <div class="text-blue-500">
          แก้ไข
      </div>
    </div>
    <div class="flex items-center p-2">
      <div class="h-full w-full">
        {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { PropType } from 'vue';
import { AccountInterface } from '@/interfaces/account.interface'

@Options({
  components: { 
  },
  props: {
    user: {
      type: Object as PropType<AccountInterface>,
      default: {}
    }
  },
  computed: {

  },
  methods: {
    
  }
})

export default class CheckoutItemList extends Vue {

}
</script>