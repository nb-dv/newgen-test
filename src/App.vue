<template>
  <div id="app">
    <ListOfCourses />
  </div>
</template>

<script>
import ListOfCourses from "@/components/ListOfCourses";

export default {
  name: 'App',
  components: {
    ListOfCourses,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
