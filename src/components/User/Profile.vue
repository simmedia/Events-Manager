<template>
  <div>
      <p>
          {{currentUser}}
      </p>
  </div>
</template>

<script>
export default {

 computed: {
   currentUser() {
     return this.$store.getters.user
   }
 }
}
</script>

<style>

</style>