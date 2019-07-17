<template>
  <div class="products">
    <div class="header">
      <div class="header__category">
        <h2 class="header__category--name">Phones & Tablets</h2>
        <p class="header__category--count">120 Products Found</p>
      </div>
    </div>
    <div class="products-wrapper">
      <div class="product" v-for="product in products" :key='product.id'>
        <router-link class="link-house" :to="'/product/' + product.id">
        <img :src="product.product_image[0].image" alt="" class="product__image">
        </router-link>
        <p class="product__company">{{product.subcategory_id.name}}</p>
        <h4 class="product__name">{{product.name}}</h4>
        <p class="product__price">Ksh. {{product.price}}</p>
        <p class="product__rating"> 5 star</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      products: []
    }
  },
  created() {
    //get products
    this.$http.get("shop/products/")
    .then(json => this.products = json.data, error => console.log(error));
  }
}
</script>

<style lang="scss" scoped>
.products {
  width: 90%;
  height: auto;
  overflow: auto;
  margin: 0 5%;
}

p {
  margin: 0;
}

.header {
  padding: 12px 0;
  text-align: center;

  .header__category--count {
    font-size: 14px;
    color: gray;
  }
}

.products-wrapper {
  width: 100%;
  

  .product {
    width: 20%;
    background-color: #F2F4F4;
    padding: 8px;
    margin: 8px 2.5%;
    float: left;

    .product__image {
      width: 80%;
      height: 30vh;
      margin: 0 10%;
      margin-bottom: 12px;
    }

    .product__name {
      margin: 8px 0;
    }

    .product__rating {
      margin: 4px 0;
    }
  }

}
</style>
