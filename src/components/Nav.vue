<template>
<div class="nav">
  <input type="checkbox" id="nav-check">
  <div class="nav-header">
    <div class="nav-title">
      ELITES
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <router-link to="/">Home</router-link>
    <router-link to="/about">Products</router-link>    
    <div class="dropdown">
      <button class="dropbtn">Account</button>
      <div class="dropdown-content">
        <router-link to="/login">Login</router-link>
        <router-link to="/">Welcome {{ user.first_name }}</router-link>
        <router-link to="/register">Register</router-link>
        <a href="#">Logout</a>
      </div>
    </div>
    <router-link to="/cart"><font-awesome-icon class="icon" icon="shopping-cart" />Cart ({{ Cart.length }})</router-link> 
  </div>
</div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      user: {}
    }
  },
  created() {

    //get products
    this.$http.get("users/" + this.$session.get('user'))
    .then(json => this.user = json.data, error => console.log(error));
  },
  computed: {
    Cart() { return this.$store.getters.Cart; },
  },
}
</script>

<style>
.nav {
  height: 50px;
  width: 100%;
  background-color: #34495E;
  position: relative;
}

.nav > .nav-header {
  display: inline;
  float: left;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #B7950B;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 16px;
}

.nav > .nav-links > a {
  display: inline-block;  
  padding: 13px 16px;
  text-decoration: none;
  color: #efefef;
}

.nav > .nav-links > a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
  display: none;
}

@media (max-width:600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #333;
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }


}

/* Dropdown Button */
.dropbtn {
  background-color: #34495E;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid #D5DBDB;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #D5DBDB;
  }

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: goldenrod;}


.icon {
  padding: 0 6px;
}
</style>
