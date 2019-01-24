<template>
    <div class="game">
        <div class="before-submitted-cards">
            <div id="question" class="question-card card">{{this.questionCard}}</div>
            <div v-for="card in cards" :key="card.content" class="card">{{card.content}}</div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router.js'

export default {
    name: 'Game',
    data: function(){
        return {
            allIn: false,
            questionCard: null,
            cards: [],
            cardsIn: false,
            winner: null,
            polling: null
        }
    },
    created(){
        this.getQuestion();
        this.poll();
    },
    methods: {
        getQuestion(){
            axios.get('https://remote-play.herokuapp.com/'+this.roomCode+'/get-question').then((response) => {
                this.questionCard = response.data.content;
            })
        },
        getCards(){
            if(this.cardsIn){
                axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/show-cards').then((response) => {
                    console.log(response.data);
                    this.cards = response.data;
                })
            }
        },
        getWinner(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/winner').then((response) => {
                console.log(response.data);
                this.winner = response.data.name;
            })
            if(this.winner != null){
                clearInterval(this.polling);
                router.push({name: 'winner'});
            }
        },
        cardStatus(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/cards').then((response) => {
                this.cardsIn = response.data;
                console.log(this.cardsIn);
            })
        },
        poll: function () {
            this.polling = setInterval(function () {
            this.cardStatus();
            this.getCards();
            this.getWinner();
            }.bind(this), 1000); 
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
    .before-submitted-cards{
        display: flex;
    }
    body{
        margin: 0%;
        font-size: 25px;
    }
    .hidden{
        display: none;
    }
    ul{
        padding:0%;
    }
    .card{
        background-color: #0293D2;
        color: white;
        margin: 10px;
        margin-bottom: 5px;
        width: 240px;
        min-height: 315px;
        padding: 10px;
        border: 1px solid black;
    }
    .question-card{
        background-color: #FF4519;
        color: white;
        padding: 10px;
    }
    .answer-card{
        background-color: white;
        color: black;
    }
    .displayed-cards{
        display: flex;
        flex-wrap: wrap;
    }
    .winner{
        margin-top: 43vh;
    }
</style>