<template>
  <div id="app">
    <div class="nav">
        <navigation/>
    </div>

    <div class="body">
       <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: 'App',
  components : {
    Navigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
}

.nav {
  background-color:#02212B;
  flex: 1;
}
.body {
  flex: 5;
 padding: 20px;
}
.table td, .table th {
    border-color: #bbbbbb;
  }
  tbody tr {
    background-color: rgba(34, 109, 59, 0.2);
  }
  .router-link-active {
    color: #363636;
  }
</style>
