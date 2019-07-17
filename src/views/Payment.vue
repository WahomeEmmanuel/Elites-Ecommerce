<template>
    <div class="payment">
        <PayPal
        amount="10.00"
        currency="USD"
        :client="credentials">
        </PayPal>
    </div>
</template>

<script>

import PayPal from 'vue-paypal-checkout'

export default {
  data() {
    return {
      credentials: {
        sandbox: 'Ad-pxI72hPMJ_LlV5FGxdS5_9KTHwkLgAR13VaLPK5KeOqAi23EKhFcR6CcqnG3b825rlzgRMHk9e1Hm'
      }
    }
  },
  components: {
    PayPal
  }
}
</script>

<style>

</style>
