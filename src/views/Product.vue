<template>
    <div class="product">
        <div class="product-brief">
            <div class="product__path">
                <p class="path">Phones > Samsung S9</p>
                <hr class="path__border">
            </div>
            <div class="row">
                <div class="product__images">
                <img src="https://via.placeholder.com/150" alt="" class="image">
                </div>
                <div class="product__summary">
                    <h2>Apple iPhone 5, GSM Unlocked, 16GB - White (Renewed)</h2>
                    <p>by Amazon Renewed</p>
                    <p><span>1 2 3 4 5</span></p>
                    <p>1276 Customer Reviews</p>
                    <br>
                    <br>
                    <h3>Price: Ksh. 33,781</h3>

                    <button class="product__buy">Add to cart</button>
                </div>
            </div>
            
        </div>
        <div class="product-info">
            <div class="product__description">
                <h4 class="title">Specifications</h4>
                <ul class="specifications__list">
                    <li class="specifications__list--item">Clip-on USB</li>
                    <li class="specifications__list--item">Securely attaches to keys, backpacks, handbags</li>
                    <li class="specifications__list--item">Easy to plug</li>
                    <li class="specifications__list--item">Play in installation</li>
                    <li class="specifications__list--item">Ultra-compact</li>
                </ul>
                <h4 class="title">Description</h4>
                <p class="description__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, explicabo veniam. Eos reiciendis, impedit, sequi earum beatae modi cum fuga, dolorem iste deleniti obcaecati doloremque eveniet corrupti a praesentium. Autem!Eveniet voluptate ipsum fugit quidem dolor, fuga dolorum, numquam debitis dolorem, atque dolore harum in tempora! Numquam consectetur eveniet suscipit at sapiente officia veritatis nobis. Est ad eum amet fugiat!</p>
            </div>
            <div class="product__review">

            </div>
        </div>
    </div>
</template>

<script>
export default {

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
            margin: 10vh 15%;
            width: 70%;
        }
    }

    .product__summary {
        width: 40%;
        height: auto;
        padding: 12px;

        .product__buy {
            border: none;
            padding: 12px 24px;
            background-color: darkgoldenrod;
            color: #fff;
        }
    }
}

.product-info {
    
    width: 100%;
    height: auto;
    background-color: #F2F4F4;

    .product__description {
        width: 90%;
        margin: 0 5%;
        height: auto;
        padding: 24px;

        .specifications__list {
            margin-left: -24px;
        }
    }

    .product__review {
        width: 90%;
        margin: 0 5%;
        height: 80vh;
        background-color: chocolate;
    }
}
</style>

