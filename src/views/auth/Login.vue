<template>
<div class="header">

<h1 class="header__title">Login </h1>
<div class="form-group">
  <label for="InputUsername">Username</label>
  <input type="text" class="form-control" id="InputUsername" name="username">
</div>
<div class="form-group">
<label for="InputPassword">Password</label>
<input type="password" class="form-control" id="InputPassword" name="password">
</div>

<p>Don't have an account? <router-link to="/register">Register</router-link></p>
<button type="submit" class="submit-button">Login</button>


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
