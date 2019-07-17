<template>
  <div class="orders">
    <span v-if="orders">    
    <h3 class="heading">Reserved items</h3>
    <table class="table" v-for="order in orders" :key='order.id'> 
    <input type="text" hidden v-model="my_order_no">
    <tbody>
        <h4>Order no. {{ order.order_no }}</h4>
        <tr class="table-header-row">
            <th class="table-header-container">ITEM</th>
            <th class="table-header-container">QUANTITY</th>
            <th class="table-header-container">UNIT PRICE</th>
            <th class="table-header-container">SUBTOTAL</th>
        </tr>
        <tr class="table-row" v-for="item in order.related_order" :key="item.product">
            <td class="table-container description">
                <router-link class="product-link" :to="'/product/' + item.id">
                <h4 class="product-name">{{ item.product.name }}</h4>
                </router-link>
                </td>
            <td class="table-container">{{item.product.quantity}}</td>
            <td class="table-container">{{ item.product.price | toCurrency}}</td>
            <td class="table-container sub-total">{{ item.product.price | toCurrency}}</td>
        </tr>
         <tr class="table-footer-row">
            <th class="table-footer-container"></th>
            <th class="table-footer-container"></th>
            <th class="table-footer-container total">Total</th>
            <th class="table-footer-container amount">{{order.amount | toCurrency}}</th>
        </tr>
    </tbody>
    </table>
    <div class="proceed">
        <form class="checkout__form" @submit.prevent="submitPayment">
            <div class="form-group">
                <p class="label">Phone</p>
                <input type="text" class="form-control"  name="phone"  v-model="finish_payment.phone">
            </div>
            <div class="form-group">
                <p class="label">Pickup point</p>
                <select class="form-select" v-model="finish_payment.pickup_point">
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
    </span>
    <!-- <div v-if="numCart === 0" class="empty">
        <font-awesome-icon class="icon" icon="shopping-cart" />
        <h3 class="empty__warning">Your cart is empty!</h3>
        <router-link to="/" class="start" >Start shopping</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      orders: [],
      finish_payment: {},
      my_order_no: ''
    }
  },
  created() {
    // this.user = this.$session.get('user')
    //get products
    // this.$http.get("shop/orders/")
    // .then(json => {
    //     // this.orders = json.data
    //     console.log(json.data)
    // }, error => console.log(error));

    //get products
    this.$http.get("shop/orders/")
    .then(json => this.orders = json.data, error => console.log(error));

  },
  computed: {
    Cart() { return this.$store.getters.Cart; },
    numCart() { return this.Cart.length; },
    total() {
      return this.Cart.reduce((acc, cur) => acc + cur.price, 0);
    },

  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
    submitPayment: function() {
        
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
    margin: 24px 15%;
    background-color: #f5f5f5;
    width: 70%;
    overflow: auto;
}

.heading {
    color: #000;
    text-align: center;
}

.table {
   width: 95%;
   margin: 0 2.5%;
   padding: 6px;
   border-collapse: separate;
   border-spacing: 0 6px;
}


.table-row {
    background-color: #ffffff;

}

.table-container {
    padding: 24px 6px;
    vertical-align: top;

    &:not(:first-child) {
        border-left: 1px solid #D5DBDB;
    }
}

.description {
    width: 55%;
}

.table-header-row {
    padding: 12px 0;
}

.table-header-container {
    text-align: left;
    color: #A6ACAF;
}

.product-link {
    text-decoration: none;
}

.product-name {
    color: #34495E;
    font-weight: 600;
    margin: 0;
    margin-bottom: 12px;
}

.sub-total {
    color: #B7950B;
}

.remove {
    border: none;
    background-color: transparent;
    color: #B7950B;
}

.table-footer-row {
    padding: 12px 0;
}

.table-footer-container {
    text-align: right;
}

.total {
    font-size: 14px;
    font-weight: 600;
    color: #000;
}

.amount {
    color: #B7950B;
    font-weight: 600;
    font-size: 18px;
}

.proceed {
    margin: 24px 12px;

    .continue {
        text-decoration: none;
        border: none;
        padding: 12px 36px;
        background-color: #fff;
        color:#B9770E;
        font-weight: 600;
        font-size: 16px;
        margin: 6px 12px;
        float: right;
    }

    .checkout {
        text-decoration: none;
        border: none;
        padding: 12px 36px;
        background-color: #B9770E;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin: 6px 12px;
        float: right;
    }    
}

.empty {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 24px 12px;

    .empty__warning {
        font-size: 24px;
    }

    .icon {
        font-size: 96px;
        margin: 24px 0;
        color: #BFC9CA;
    }

    .start {
        text-decoration: none;
        border: none;
        padding: 12px 36px;
        background-color: #B9770E;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin: 6px 12px;
        float: right;
    }
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

</style>
