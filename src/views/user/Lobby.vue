<template>
    <div class="waiting-to-start-game">
        <Header class="header" msg='Room Code: '/>
        <button v-on:click="startGame">EVERYONE'S IN</button>
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
    data: function(){
        return {
            start: false,
            judge: null,
            polling: null
        }
    },
    created(){
        this.ready();
    },
    methods: {
        startGame(){
            axios.get(`http://localhost:8080/${this.roomCode}/start-game`).then((response) => {
                console.log(response.data);
            })
            this.navigate();
        },
        gameStarted(){
            axios.get('http://localhost:8080/'+this.roomCode+'/has-game-started').then((response) => {
                console.log('game started: '+response.data);
                this.start = response.data;
            })
            if(this.start) this.navigate();
        },
        navigate() {
            clearInterval(this.polling);
            router.push({ name: "player" });
        },
        ready: function () {
            this.polling = setInterval(this.gameStarted, 1000); 
        }
    },
    computed: {
        roomCode: function() {
            return this.$store.getters.roomCode;
        },
        username: function(){
            return this.$store.getters.username;
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