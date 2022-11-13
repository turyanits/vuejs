<template>
  <div>
    <h1> Conditers </h1>
      <hr>
      <div class="navigator">
        <router-link to="/">Home</router-link>
        <router-link to="/search">Search</router-link>
        <router-link to="/filter">Filter</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name: 'App',
}
</script>

<style>
  .navigator {
    display: flex;
  }

  a {
    margin: 5px;
  }
</style>
