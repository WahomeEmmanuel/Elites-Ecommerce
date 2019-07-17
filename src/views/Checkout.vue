<template>
    <div class="checkout">
        <h2 class="heading">Checkout to buy your items</h2>
        <div class="payment">
            <div class="reserve">
                <h3 class="header">Reserve items in cart</h3>
                <p class="explanation">
                    Pay Ksh. 100 to reserve you items for a later purchase. 
                    A duration of 3 days is given to have purchased your items else the reservation fee will expire and the items sold.
                </p>
                <form class="checkout__form" @submit.prevent="makeReserve">
                    <div class="form-group">
                        <p class="label">Phone</p>
                        <input type="text" class="form-control"  name="phone"  v-model="reserve.phone">
                    </div>
                    <h4>Total amount to pay: KSH 100</h4>
                    <button type="submit" name="reserve" class="submit-button">Reserve</button>
                </form> 
            </div>
            <p class="or">OR</p>
            <div class="buy">
                <h3 class="header">Place your order</h3>
                <p class="explanation">
                    Pay to complete your purchase. Select a pickup point for your item.
                </p>

                <form class="checkout__form" @submit.prevent="submitPayment">
                    <div class="form-group">
                        <p class="label">Phone</p>
                        <input type="text" class="form-control"  name="phone"  v-model="checkout.phone">
                    </div>
                    <div class="form-group">
                        <p class="label">Pickup point</p>
                        <select class="form-select" v-model="checkout.pickup_point">
                            <option value="Nyeri">Nyeri - Dedan Kimathi University</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Mombasa">Mombasa</option>
                        </select>
                    </div>
                    <h4>Total amount to pay: {{ total | toCurrency}}</h4>
                    <button type="submit" class="submit-button">Pay</button>
                </form> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'checkout',
    data() {
         return {
             checkout: {},
             reserve: {},
             reserve_amount: 100
         }
     },
    computed: {
        Cart() { return this.$store.getters.Cart; },
        total() {
        return this.Cart.reduce((acc, cur) => acc + cur.price, 0);
        },
        product_ids() {
            return this.Cart.map(({ id }) => id)

        }
    },
    methods: {
        submitPayment: function() {
            this.checkout.order_by = this.$session.get('user')
            this.checkout.amount = this.total
            this.checkout.buy = true
            this.checkout.reserved = false
            this.checkout.cart = this.product_ids

            this.$http.post('shop/order/',this.checkout)
            .then(response => {
                window.open('https://e1a08c9c.ngrok.io/payment/json.php?phone=' +this.checkout.phone+'&amount='+this.checkout.amount+'&order_no='+response.data.order_no,'_blank');
                this.showAlert('The payment prosess of '+ this.checkout.amount + ' via '+ this.checkout.phone +' has been initiated. Please enter your mpesa password when prompted to pay.')
                this.$router.push('/confirm')
            })
            .catch(error => {});

        },
        makeReserve: function() {
            this.reserve.order_by = this.$session.get('user')
            this.reserve.amount = this.total
            this.reserve.buy = false
            this.reserve.reserved = true
            

            this.$http.post('shop/reserve/',this.reserve)
            .then(response => {
                this.showAlert('The reservation prosess of '+ this.reserve_amount + ' via '+ this.reserve.phone +' has been initiated. Please enter your mpesa password when prompted to pay.')
                this.$router.push('/confirm')
                window.open('https://6de6f73e.ngrok.io/payment/json.php?phone=' +this.reserve.phone+'&amount='+this.reserve_amount+'&order_no='+response.data.order_no,'_blank');
            })
            .catch(error => {});

        },
        showAlert: function($message) {
            this.$swal({
            type: 'success',
            title: 'Payment',
            text: $message,
            showConfirmButton: true
            });
        }
    }

}
</script>

<style lang="scss" scoped>
.checkout {
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

.address-details {
    background-color: #fff;
    padding: 24px 12px;
}

.checkout__form {
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
}

.payment {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 24px 0;
}

.reserve {
    background-color: #fff;
    width: 40%;
    height: auto;
    padding: 12px 24px;
}

.or {
    margin-top: 20vh;
}

.explanation {
    color: gray;
    font-size: 14px;
}

.buy {
    background-color: #fff;
    width: 40%;
    height: auto;
    padding: 12px 24px;
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

</style>

