<template>
    <div class="during-game-non-judge">
        <div class="wait hidden">
            <div class="header-body">
                WAITING FOR USERS
            </div>
        </div>
        <div class="game">
            <div class="header-body">
                YOUR HAND
            </div>
            <div class="users">
                <ul v-for="card in cards" :key="card.content" v-on:click="select" class="card">{{card.content}}</ul> 
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import router from '@/router.js';

export default {
    name: 'Player',
    props: {
        msg: String
    },
    data: function(){
        return {
            cards: [],
            judge: null,
            content: null,
            submited: false,
            polling: null,
            winner: null
        }
    },
    created(){
        this.winner = null;
        this.judge = null;
        this.content = null;
        this.submited = false;
        this.getJudge();
        this.getCards();
        this.ready();
    },
    methods: {
        select: function(e) {
            if(!this.submited){
                this.content = e.target.innerHTML;
                console.log('selected card is: '+this.content);
                axios.post('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/'+this.$store.getters.username+'/submit-card/'+this.content).then((response) => {
                    console.log(response.data);
                    this.submited = true;
                })
                router.push({name: 'wait'});
            }
        },
        getCards(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/'+this.$store.getters.username).then((response) => {
                this.cards = response.data;
                console.log(this.cards);
            })
        },
        getJudge(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/judge').then((response) => {
                this.judge = response.data.name;
                console.log('judge: ' + this.judge);
            })
            if (this.judge == this.$store.getters.username){
                clearInterval(this.polling)
                router.push({ name: "judge" });
            }
        },
        getWinner(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/winner').then((response) => {
                this.winner = response.data.name;
            })
            if(this.winner != null) {
                clearInterval(this.polling)
                router.push({name: 'next-round'});
            }
        },
        ready: function () {
            this.polling = setInterval(function () {
                this.getJudge();
                console.log('started-round: '+this.$store.getters.next);
                this.getWinner();
            }.bind(this), 500); 
        }
    }
}

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
    .header-body{
        background-color: #FFB700;
        color: white;
        font-weight: bold;
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
        padding: 10px;
    }
    ul{
        margin: 0;
        margin-left: 2%;
        width: 90%;
        background-color:#0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
        padding: 10px;
    }
}
</style>