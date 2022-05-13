<template>
  <div class="card border-0 shadow my-5" style="height: 500px">
    <br />
    <br />
    <br />
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-6">
          <h1><strong>Electro</strong></h1>
          <h3>In your Age</h3>
          <p>Choose your powerfull device</p>
          <button class="btn btn-outline-primary">
            <router-link style="text-decoration: none; color: black" to="/shop"
              >Shop Now</router-link
            ></button
          ><br /><br />
          <button class="btn btn-outline-primary">
            <router-link
              style="text-decoration: none; color: black"
              to="/profile"
              >About Us</router-link
            >
          </button>
        </div>
        <div class="col-6">
          <img
            class="img-fluid"
            style="width: 100%"
            src="../assets/banner.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
