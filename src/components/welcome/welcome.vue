<template>
  <div id="welcome">
    <img id="logo" src="../pictures/pap.png">
    <h1>Welcome to Pic-a-Pup</h1>
    <p>Let's get started in finding you the perfect partner in cuddles today!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<style scoped>
  #welcome {

    background-size: contain;
    width: 80%;
    margin: auto;
    align-items: center;

  }

  #logo{
    padding-top: 5%;
    margin: 0 auto;
    display: block;
    height: 30%;
    width: 30%;
    filter: drop-shadow(0 10px 8px rgba(0,40,80,.5));

  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    transition: 1s;
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid cyan;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: cyan;

  }

  .cta a:hover,
  .cta a:active {
    background-color: #6a2b6a;
    color: white;
  }
</style>