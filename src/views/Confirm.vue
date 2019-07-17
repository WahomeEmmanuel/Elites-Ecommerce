<template>
    <div class="confirm">
        <h2 class="heading">Confirm your payment</h2>
        <form class="confirm__form" @submit.prevent="confirmPayment">
            <div class="form-group">
                <p class="label">M-pesa code</p>
                <input type="text" class="form-control"  name="code"  v-model="confirm.code">
            </div>
            <button type="submit" name="confirm" class="submit-button">Confrim payment</button>
        </form> 
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'checkout',
    data() {
         return {
             confirm: {},
         }
    },
    computed: {
        Cart() { return this.$store.getters.Cart; },
        total() {
        return this.Cart.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    methods: {
        confirmPayment: function() { 
            this.confirm.amount = 1
            //get payment status
            axios.get("http://127.0.0.1/payment/payments.php?code="+this.confirm.code+"&amount="+this.confirm.amount)
            .then(json => {
                if(json.data.payment === true)
                {
                   this.showSuccess('Your payment has been successful. Pick your item within the next 3 business days.') 
                } else {
                    this.showError('Your payment has not yet gone through. Please try confirming again if you have paid.')
                }
                }, error => console.log(error));
        },
        showSuccess: function($message) {
            this.$swal({
            type: 'success',
            title: 'Payment',
            text: $message,
            showConfirmButton: true
            });
        },
        showError: function($message) {
            this.$swal({
            type: 'error',
            title: 'Payment',
            text: $message,
            showConfirmButton: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.confirm {
    height: auto;
    width: 80%;
    margin: 24px 10%;
    background-color: #f5f5f5;
    padding: 24px;
}

.heading {
    color: #000;
    text-align: center;
}

.confirm__form {
    .label {
        margin: 6px 0;
    }

    .header {
        color: #B9770E;
    }

    .form-group input, select{
        height:30px;
        width:93%;
        padding:5px 10px;
        font-size: 15px;
        border:1px solid #D5DBDB;
        margin: 4px 0;
        border-radius: 5px;
    }

    .form-select {
        background-color: #fff;
    }

    .submit-button{
        border: none;
        padding: 12px 24px;
        background-color: #B9770E;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        margin-top: 24px;
    }
}
</style>

