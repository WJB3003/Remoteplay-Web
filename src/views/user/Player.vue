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
import Header from '@/components/Header.vue';

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
            submited: false
        }
    },
    created(){
        this.getJudge();
        this.getCards();
        this.ready();
    },
    methods: {
        select: function(e) {
            this.content = e.target.innerHTML;
            console.log('selected card is: '+this.content);
            if(!this.submited){
                axios.post('http://localhost:8080/'+this.$store.getters.roomCode+'/'+this.$store.getters.username+'/submit-card/'+this.content).then((response) => {
                    console.log(response.data);
                    this.submited = true;
                })
            }
        },
        getCards(){
            axios.get('http://localhost:8080/'+this.$store.getters.roomCode+'/'+this.$store.getters.username).then((response) => {
                this.cards = response.data;
                console.log(this.cards);
            })
        },
        getJudge(){
            axios.get('http://localhost:8080/'+this.$store.getters.roomCode+'/judge').then((response) => {
                this.judge = response.data.name;
                console.log('judge: ' + this.judge);
            })
            if (this.judge == this.$store.getters.username){
                this.navigate();
            }
        },
        navigate() {
            router.push({ name: "judge" });
        },
        ready: function () {
            this.getJudge();

            setInterval(function () {
            this.getJudge();
            }.bind(this), 1000); 
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