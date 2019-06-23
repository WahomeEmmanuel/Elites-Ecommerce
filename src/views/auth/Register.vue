<template>
<div class="header">

<h1 class="header__title">Register </h1>
<div class="form-group">
<label for="InputUsername">Username</label>
<input type="text" class="form-control" id="InputUsername" name="username"  >
</div>

<div class="form-group">
<label for="InputEmail1">Email address</label>
<input type="email" class="form-control" id="InputEmail1" >
</div>

<div class="form-group">
<label for="InputPassword">Password</label>
<input type="password" class="form-control" id="InputPassword" name="password_1" >
</div>

<div class="form-group">
<label for="InputPassword1"> Confirm Password</label>
<input type="password" class="form-control" id="InputPassword1" name="password_2" >
</div>

<p>Do you have an account? <router-link to="/login">Login</router-link></p>
<button type="submit" name="register" class="submit-button">Register</button>

</div>
</template>

<script>

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
