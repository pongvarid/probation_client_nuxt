<template>
<v-toolbar dense color="transparent" flat>
    <v-icon>{{icon}}</v-icon>
    <span class="ml-2 font-semibold text-xs ">

        {{head}}</span>
    <v-spacer></v-spacer>
    <span class="text-xs font-semibold">{{txt}}</span>
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
