<template>
<v-toolbar dense color="transparent" flat>

    <span class="ml-2 "> 
        {{head}}</span>
    <v-spacer></v-spacer>
    <span>{{txt}}</span>
    <v-icon>{{icon}}</v-icon>
</v-toolbar>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ' '
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
