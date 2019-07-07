<template>
<div class="header">

<h1 class="header__title">Register </h1>
<form @submit.prevent="submitRegister"> 
  <div class="form-group">
  <label for="InputUsername">First Name</label>
  <input type="text" class="form-control"  name="username"  v-model="register.first_name">
  </div>

    <div class="form-group">
  <label for="InputUsername">Last Name</label>
  <input type="text" class="form-control" name="username"  v-model="register.last_name">
  </div>

  <div class="form-group">
  <label for="InputEmail1">Email address</label>
  <input type="email" class="form-control"  v-model="register.email">
  </div>

  <div class="form-group">
  <label for="InputPassword">Password</label>
  <input type="password" class="form-control" id="InputPassword" name="password_1" v-model="register.password">
  </div>

  <div class="form-group">
  <label for="InputPassword1"> Confirm Password</label>
  <input type="password" class="form-control" id="InputPassword1" name="password_2" >
  </div>

  <p>Do you have an account? <router-link to="/login">Login</router-link></p>
  <button type="submit" name="register" class="submit-button">Register</button>
</form>
</div>
</template>

<script>
export default {
     name: 'register',
     data() {
         return {
             register: {}
         }
     },
    methods: {
        submitRegister: function() {
            this.$http.post('auth/users/',this.register)
            .then(response => {
                this.showAlert()
                this.$router.push('/login')
            })
            .catch(error => {});
        },
        showAlert: function() {
            this.$swal({
            type: 'success',
            title: 'Thank you.',
            text: "Successfully registered",
            showConfirmButton: true
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  width: 30%;
	margin: 40px auto 0px;
	text-align: center;
	padding: 20px;
  height: auto;
}

.header__title {
  color: #34495E;
}

.form-group {
    margin: 10px 0px  10px 0px;
    margin-top: 24px;
}

.form-group label {
  display:block;
    text-align: left;
    margin: 3px;
}
.form-group input{
  height:30px;
	width:93%;
  padding:5px 10px;
  font-size: 15px;
  border:1px solid #D5DBDB;
  margin: 4px 0;
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
