<template>
    <Header msg="WAITING FOR USERS"/>
</template>

<script>

import Header from '@/components/Header.vue';

export default {
    name: 'Wait',
    props: {
        msg: String
    },
    components: {
        Header
    },
};

</script>

<style>
@media screen and (min-width: 901px){
    .non-mobile-view{
        font-size: 100px;
    }
    .mobile-view{
        display: none;
    }
}

@media only screen and (max-width: 900px) {
    .waiting-header{
        background-color: #FFB700;
        color:white;
        margin-bottom: 45vh
    }
    .non-mobile-view{
        display: none;
    }
    body{
        max-height: 100vh;
        padding: 0%;
        margin: 0%;
        font-size: 25px;
    }
    .hidden{
        display: none;
    }
}
</style>