<template>
  <ul id="circularMenu">
    <li class="home"><a href="#url"><b>HOME<br><span>back to the start</span></b></a></li>
    <li class="chat"><a href="#url"><b>CHAT<br><span>talk to friends in real time</span></b></a></li>
    <li class="email"><a href="#url"><b>EMAIL<br><span>send us your thought on an email</span></b></a></li>
    <li class="shop"><a href="#url"><b>SHOP<br><span>online shopping for all your needs</span></b></a></li>
    <li class="delivery"><a href="#url"><b>DELIVERY<br><span>track your deliveries</span></b></a></li>
    <li class="search"><a href="#url"><b>SEARCH<br><span>search our enormous site</span></b></a></li>
    <li class="address"><a href="#url"><b>ADDRESS<br><span>why not send us a letter</span></b></a></li>
    <li class="upload"><a href="#url"><b>UPLOAD<br><span>upload images to your web space</span></b></a></li>
  </ul>
</template>

<style>
#circularMenu {
  padding: 0;
  margin: 50px auto;
  list-style: none;
  position: relative;
  width: 300px;
  height: 300px;
  background: #fff url(@/assets/image/background2.gif) no-repeat;
}

#circularMenu li {
  display: block;
  width: 60px;
  height: 60px;
  position: absolute;
}

#circularMenu li.home {
  left: 120px;
  top: 4px;
  background: url(@/assets/image/home3.gif) no-repeat center center;
}

#circularMenu li.chat {
  left: 200px;
  top: 40px;
  background: url(@/assets/image/chat.gif) no-repeat center center;
}

#circularMenu li.upload {
  left: 35px;
  top: 40px;
  background: url(@/assets/image/photo.gif) no-repeat center center;
}

#circularMenu li.email {
  left: 230px;
  top: 115px;
  background: url(@/assets/image/email1.gif) no-repeat center center;
}

#circularMenu li.address {
  left: 5px;
  top: 115px;
  background: url(@/assets/image/address.gif) no-repeat center center;
}

#circularMenu li.shop {
  left: 200px;
  top: 190px;
  background: url(@/assets/image/shop4.gif) no-repeat center center;
}

#circularMenu li.search {
  left: 35px;
  top: 190px;
  background: url(@/assets/image/search1.gif) no-repeat center center;
}

#circularMenu li.delivery {
  left: 120px;
  top: 225px;
  background: url(@/assets/image/delivery.gif) no-repeat center center;
}

#circularMenu li a b {
  display: none;
}

#circularMenu li a {
  display: block;
  width: 60px;
  height: 60px;
  text-align: center;
}

#circularMenu li a:hover {
  background: url(@/assets/image/circle.gif);
  text-decoration: none;
  font-family: 'latomedium', arial, sans-serif;
}

#circularMenu li a:hover b {
  position: absolute;
  display: block;
  width: 100px;
  height: 100px;
  font-size: 16px;
  color: #63352c;
  background: #fff;
}

#circularMenu li a:hover b span {
  display: block;
  font-size: 13px;
  color: #888;
  font-weight: normal;
  margin-top: 15px;
}

#circularMenu li.home a:hover b {
  left: -22px;
  top: 100px;
}

#circularMenu li.chat a:hover b {
  left: -102px;
  top: 64px;
}

#circularMenu li.upload a:hover b {
  left: 63px;
  top: 64px;
}

#circularMenu li.email a:hover b {
  left: -132px;
  top: -11px;
}

#circularMenu li.address a:hover b {
  left: 93px;
  top: -11px;
}

#circularMenu li.shop a:hover b {
  left: -102px;
  top: -87px;
}

#circularMenu li.search a:hover b {
  left: 63px;
  top: -87px;
}

#circularMenu li.delivery a:hover b {
  left: -22px;
  top: -121px;
}
</style>
<script lang="ts" setup>


</script>
