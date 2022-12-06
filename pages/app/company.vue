<template>
    <div class="company">
      Compmay

    </div>
</template>
<script>
export default {
  name: 'Company',
  data: () => ({
    response: false,
  }),
  async created() {

    this.response = true;
  },
  methods: {

  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
}
</script>