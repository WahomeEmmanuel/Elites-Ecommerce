<template>
  <div class="products">
    <div class="header">
      <div class="header__category">
        <h2 class="header__category--name">Phones & Tablets</h2>
        <p class="header__category--count">120 Products Found</p>
      </div>
    </div>
    <div class="products-wrapper">
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
      <div class="product">
        <img src="https://via.placeholder.com/150" alt="" class="product__image">
        <p class="product__company">Company</p>
        <h4 class="product__name">Product name & description</h4>
        <p class="product__price">Ksh. 20,000</p>
        <p class="product__rating"> 5 star</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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
    margin: 8px 20px;
    float: left;

    .product__image {
      width: 100%;
      height: 30vh;
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
