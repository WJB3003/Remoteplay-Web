<template>
    <div class="game">
        <div class="before-submitted-cards">
            <div id="question" class="question-card card">{{this.questionCard}}</div>
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
            questionCard: null
        }
    },
    created(){
        this.getQuestion();
        this.poll();
    },
    methods: {
        checkCards(){
            axios.get('http://localhost:8080/'+this.roomCode+'/cards').then((response) => {
            })
        },
        getQuestion(){
            axios.get('http://localhost:8080/'+this.roomCode+'/get-question').then((response) => {
                this.questionCard = response.data.content;
            })
        },
        poll: function () {
            this.checkCards();

            setInterval(function () {
            this.checkCards();
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