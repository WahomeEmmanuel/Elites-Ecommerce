<template>
    <div class="product">
        <div class="product-brief">
            <div class="product__path">
                <p class="path">Phones > {{product.subcategory_id.name}}</p>
                <hr class="path__border">
            </div>
            <div class="row">
                <div class="product__images">
                <img :src="product.product_image[0].image" alt="" class="image">
                </div>
                <div class="product__summary">
                    <h2 class="name">{{product.name}}</h2>
                    <p class="company">by Amazon Renewed</p>
                    <p><span>1 2 3 4 5</span></p>
                    <p>1276 Customer Reviews</p>
                    <br>
                    <br>
                    <h3 class="price">Price: Ksh. {{product.price}}</h3>

                    <button class="product__buy" @click="addToCart(product)">Add to cart</button>
                </div>
            </div>
            
        </div>
        <div class="product-info">
            <div class="product__description">
                <h4 class="title">Features</h4>
                <ul class="specifications__list" v-html="product.ingredients">

                </ul>
                <h4 class="title">Description</h4>
                <p class="description__info">{{product.description}}</p>
            </div>
            <div class="product__review">
                <div class="reviews">
                    <h3 class="title">Reviews</h3>
                    <ul class="reviews__list">
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                        <li class="reviews__list--item">
                            <p class="name">Danman</p>
                            <p>
                                <span class="rating">3</span>
                                <span class="review">Remote and sound not soo good.bt good for the price</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="add_review">
                     <h3 class="title">Add Review</h3>
                     <form class="review_form">
                         <input type="text" placeholder="Rating" class="form__input">
                         <textarea name="" id="" cols="30" rows="10" placeholder="Write review" class="form__input">

                         </textarea>
                         <br>
                         <input type="submit" value="Submit" class="form__submit">
                     </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      product: {}
    }
  },
  created() {

    //get products
    this.$http.get("shop/products/" + this.$route.params.id)
    .then(json => this.product = json.data, error => console.log(error));
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
  },
}
</script>

<style lang="scss" scoped>
.product-brief {
    margin: 0 5%;
    padding: 12px 0;
    width: 90%;
    height: auto;
}

.product__path  {
    width: 95%;
    padding: 0 2.5%;

    .path {
        font-size: 14px;
        color: gray;
    }

    .path__border {
        color: gray;
    }
}

.row {
    width: 90%;
    margin: 0 5%;
    height: 70vh;
    display: flex;
    flex-flow: row nowrap;

    .product__images {
        width: 60%;
        height: auto;
        background-color: white;

        .image {
            height: 50vh;
            margin: 10vh 25%;
            width: 50%;
        }
    }

    .product__summary {
        width: 40%;
        height: auto;
        padding: 12px;

        .name {
            color: #000;
        }

        .product__buy {
            border: none;
            padding: 12px 24px;
            background-color: #B9770E;
            color: #fff;
            font-weight: 600;
            font-size: 14px;
        }
    }
}

.product-info {
    
    width: 100%;
    height: auto;

    .product__description {
        width: 90%;
        margin: 0 5%;
        height: auto;
        padding: 24px;

        .title {
            color: #000;
        }

        .specifications__list {
            margin-left: -24px;
            color: gray;
        }

        .description__info {
            color: gray;
        }
    }

    .product__review {
        width: 90%;
        margin: 0 5%;
        height: auto;
        display: flex;
        flex-flow: row nowrap;

        .reviews {
            width: 65%;
            height: 100%;
        }

        .title {
            padding-left: 16px;
        }

        .reviews__list {
            margin-left: -24px;
        }

        .reviews__list--item {
            list-style-type: none;
            border-bottom: 1px solid rgb(207, 207, 207);

            .name {
                color: #000;
                font-size: 14px;
            }

            .rating {
                color: goldenrod;
            }

            .review  {
                padding: 0 12px;
                font-size: 14px;
                color: gray;
            }
        }

        .add_review {
            width: 35%;
            height: 100%;
            padding: 24px;

            .form__input {
                margin: 6px;
                padding: 6px;
                width: 100%;
            }

            .form__submit {
                margin: 6px;
                padding: 12px 24px;
                background-color: #B9770E;
                color: #fff;
                font-weight: 600;
                font-size: 14px;
                border: none;
            }
        }
    }
}
</style>

