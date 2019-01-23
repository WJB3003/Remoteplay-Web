<template>
    <div class="display-winner">
        <div class="header"><b>ROOM CODE: {{this.$store.getters.roomCode}}</b></div>
        <button id="next-round" v-on:click="round">Next Round</button>
    </div>
</template>

<script>

import axios from 'axios';
import router from '@/router.js';

export default {
    name: 'NextRound',
    data: function(){
        return {
            judge: null,
            polling: null,
            start: false
        }
    },
    created(){
        this.ready();
    },
    methods: {
        round(){
            axios.put('http://localhost:8080/'+this.$store.getters.roomCode+'/judge').then((response) => {
                console.log('Judge: '+response.data.name);
                this.judge = response.data.name;
            })
        },
        isRound(){
            axios.get('http://localhost:8080/'+this.$store.getters.roomCode+'/round').then((response) => {
                console.log(response);
                this.start = response.data;
            })
        },
        navigate(){
            if(this.start){
                clearInterval(this.polling);
                router.push({name: 'player'});
            }
        },
        ready: function () {
            this.polling = setInterval(function () {
                this.isRound();
                this.navigate();
            }.bind(this), 500); 
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
    #next-round{
        margin-top: 40vh;
    }
    .header{
        margin: 0%;
        background-color: #FFB700;
        color:white;
        width: 100%;
        height: 5%;
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
        background-color: #0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
}
</style>