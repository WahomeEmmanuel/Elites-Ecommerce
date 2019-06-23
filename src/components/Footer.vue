<template>
    <div class="footer">
        <div class="footer__main">
            <div class="main-col company">
                <h3 class="title">COMPANY</h3>
                <p class="text main-text">About us</p>
                <p class="text">Elites is an e-commerce platform is built as a fully stocked inventory management system. We are guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.</p>
               
            </div>
            <div class="main-col contacts">
                <h3 class="title">CONTACT US</h3>
                <ul class="footer__list">
                    <li class="footer__list--item">FAQ Center</li>
                    <li class="footer__list--item">elites@mail.com</li>
                    <li class="footer__list--item">Dedan Kimathi University</li>
                </ul>
            </div>
            <div class="main-col customer-care">
                <h3 class="title">CUSTOMER CARE</h3>
                <ul class="footer__list">
                    <li class="footer__list--item">+254 795 859 352</li>
                    <li class="footer__list--item">support@mail.com</li>
                    <li class="footer__list--item">MON - SAT: 8am - 5pm</li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            <h2>Elites E-commerce</h2>
            <span class="terms">Privacy Policy | Terms & Conditions</span>
            <p class="copyright">ELITES.ECOMMERCE 2019</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 24px;
    width: 100%;
    background-color: #F8F9F9;
}


.footer__main {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    

    .main-col {
        width: 30%;
        padding: 24px;

        .title {
            color: #2E86C1;
        }

        .text {
            font-size: 16px;
            color: #808B96;
            font-weight: 300;
        }

        .main-text {
            color: #B7950B;
            font-weight: 600;
            font-size: 18px;
        }
    }


    .footer__list {
        margin-left: -24px;
        font-size: 16px;
        color: #808B96;

        .footer__list--item {
            list-style-type: none;
            padding: 6px 0;
        }
    }

}

.footer__copyright {
    background-color: #34495E;
    height: 30vh;
    text-align: center;
    padding: 24px 0;
    border-top: 1px solid gray;
    color: #F2F4F4;

    .terms {
        font-size: 14px;
        color: #B7950B
    }

    .copyright {
        font-size: 16px;
        color: #E5E8E8;
    }
}
</style>

