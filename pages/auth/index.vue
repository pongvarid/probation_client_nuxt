<template>
 <div>
  
 </div>
</template>

<script>
export default {
  layout: 'auth',
  name: 'IndexPage',
  async created(){
    await this.$router.replace('/auth/login')
  }
}
</script>
