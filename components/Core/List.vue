<template>
<v-toolbar dense color="transparent" flat>
    <v-icon>{{icon}}</v-icon>
    <span class="ml-2 font-semibold">

        {{head}}</span>
    <v-spacer></v-spacer>
    <span>{{txt}}</span>
</v-toolbar>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'mdi-account'
        },
        head: {
            default: ''
        },
        txt: {
            default: ''
        }
    }
}
</script>

<style>

</style>
