<template>
    <div class="during-game-non-judge">
        <div class="header">
            <b>YOUR HAND</b>
        </div>
        <div class="users">
        <ul>
            <template v-for="card in cards" class="card">
                <button>{{card.content}}</button>
            </template>
        </ul>
    </div>
    </div>
</template>

<script>

import axios from 'axios';
import router from '@/router.js'

export default {
    name: 'Player',
    props: {
        msg: String
    },
    data: function(){
        return {
            cards: [],
            judge: null
        }
    },
    created(){
        this.getCards();
        this.ready();
    },
    methods: {
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
            }.bind(this), 100); 
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
    .header{
        background-color: #FFB700;
        color:white;
        padding: 5px;
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
        padding-left: 0%;
    }
}
</style>