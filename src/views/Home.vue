<template>
  <div class="home">
    <div class="top">
      <div class="categories" >
        <h4 class="title">Categories</h4>
        <ul class="category__list">
          <li class="category__list--item">Phones</li>
          <li class="category__list--item">Tablets</li>
          <li class="category__list--item">Laptop</li>
          <li class="category__list--item">Computers</li>
          <li class="category__list--item">Cameras</li>
        </ul>
      </div>
      <!-- <img src="https://images.pexels.com/photos/449559/pexels-photo-449559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="image"> -->
      <div class="image">
        <img src="https://cdn.pixabay.com/photo/2015/08/25/11/50/stairs-906723_960_720.jpg" alt="" class="img">
        <div class="centered">
          <h2>Shopping made easy around the world.</h2>
        </div>
      </div>
      
    </div>
    <div class="recent-products">
      <h2 class="recent-title">Recently added products</h2>
      <div class="recent-row">
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
        <div class="recent-product">
          <img src="https://via.placeholder.com/150" alt="" class="product__image">
          <p class="product__name">Nokia 3.2</p>
          <p class="product__price">Ksh. 13,000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
   
  }
}
</script>

<style lang="scss" scoped>



.top {
  height: 70vh;
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  background-color: #F0F3F4;
}

.categories {
  width: 20%;
  height: auto;

  .title {
    margin-left: 24px;    
  color: #B7950B;
  }

  .category__list--item {
    color: #808B96;
    list-style-type: none;
    margin-left: -24px;
    margin-right: 16px;
    padding: 12px;
    border-bottom: 1px solid #E5E8E8;
  }
}

.image {
  width: 80%;
  height: 100%;
  position: relative;
  text-align: center;

  /* Centered text */
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;        
    color: goldenrod;
  }
}

.img {
  width: 100%;
  height: 100%;
}

.recent-products {
  height: auto;
  overflow: auto;
  width: 100%;
  margin: 24px 0;

  .recent-title {
    text-align: center;
    padding: 12px 0;
    color: #000;
  }

  .recent-row {
    width: 100%;
    height: auto;

    .recent-product {
      width: 18%;
      height: 45vh;
      margin: 1%;
      float: left;
      background-color: #fff;

      .product__image {
        height: 30vh;
        width: 100%;
      }

      .product__name {
        font-size: 14px;
        color: #1C2833;
        padding: 0 8px;
      }

      .product__price {
        padding: 0 8px;
      }
    }
  }
}
</style>

