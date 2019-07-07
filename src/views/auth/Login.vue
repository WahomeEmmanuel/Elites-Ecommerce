<template>
<div class="header">

<h1 class="header__title">Login </h1>

<form @submit.prevent="submitLogin">

<div class="form-group">
  <label for="InputEmail1">Username</label>
  <input type="text" class="form-control" id="InputEmail1" v-model="login.username">
</div>

<div class="form-group">
<label for="InputPassword">Password</label>
<input type="password" class="form-control" id="InputPassword" name="password" v-model="login.password">
</div>

<p>Don't have an account? <router-link to="/register">Register</router-link></p>
<button type="submit" class="submit-button">Login</button>
</form>

</div>
</template>

<script>
export default {
     name: 'login',
     data() {
         return {
             login: {}
         }
     },
    methods: {
        submitLogin: function() {
            this.$http.post('auth/login/',this.login)
            .then(response => {
              if (response.data.id)
              {
                console.log(response.data)
                this.$session.start()
                this.$session.set('user', response.data.id)
                // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.token
                location.reload();
                this.$router.push('/')
              }
              else {
                this.showAlert()
              }         
                
            })
            .catch(error => {});
        },
        showAlert: function() {
            this.$swal({
            type: 'error',
            text: "Invalid username or password",
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
