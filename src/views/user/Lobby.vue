<template>
    <div class="waiting-to-start-game">
        <Header class="header" msg="ROOM CODE : A1B2"/>
        <button v-on:click="start">EVERYONE'S IN</button>
    </div>
</template>

<script>

import Header from '@/components/Header.vue';
import axios from 'axios';
import router from '@/router.js'

export default {
    name: 'Lobby',
    components: {
        Header,
    },
    methods: {
        start(){
            axios.get(`http://localhost:8080/${this.roomCode}/start-game`).then((response) => {
                console.log(response.data);
            })
            this.navigate();
        },
        navigate() {
            router.push({ name: "player" });
        }
    },
    computed: {
        roomCode: function() {
            return this.$store.getters.roomCode;
        }
    }
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
        margin-bottom: 45vh;
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
    button{
        width: 90%;
        background-color:#0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
    .header{
        margin-bottom: 40vh;
    }
}
</style>