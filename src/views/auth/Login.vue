<template>
<div class="header">

<h1 >Login </h1>
<div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputUsername1" name="username">
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password">
    <div class="form-group">
                 <button type="submit" class="btn btn-default">Login</button>
                 </div>
    </div>
</div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>

.header {
  width: 30%;
	margin: 80px auto 0px;
	color: white;
	background: rgb(101, 95, 160);
	text-align: center;
	border: 1px solid #B0C4DE;
	border-bottom: none;
	border-radius: 10px 10px 0px 0px;
	padding: 20px;
}

.form-group {
    margin: 10px 0px  10px 0px;
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
  border-radius: 5px;
  border:1px solid gray;
}
.button{
	padding:10px;
	font-size: 15px;
	color: white;
	border:none;
	border-radius: 5px;
	background:#5F9EA0;
}

</style>
