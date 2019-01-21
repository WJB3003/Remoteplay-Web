<template>
    <!-- PART FIVE -->
    <div class="display-winner">
        <div class="winning-prompt room-code-header">
            THE WINNER IS: 
        </div>
        <div class="displayed-cards">
            <div class="question-card card">
                {{this.question}}
            </div>

            <div class="winning-card answer-card card">
                {{this.winningCard}}
            </div>
        </div>
        <div class="winner">
            {{this.winner}}
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'WinnerDisplay',
    data: function(){
        return {
            winner: null,
            winningCard: null,
            question: null
        }
    },
    created(){
        this.getWinner();
        this.getQuestion();
    },
    methods: {
        getWinner(){
            axios.get('http://localhost:8080/'+this.$store.getters.roomCode+'/winner').then((response) => {
                console.log(response.data);
                this.winner = response.data.name;
                this.winningCard = response.data.submitCard.content;
            })
        },
        getQuestion(){
            axios.get('http://localhost:8080/'+this.$store.getters.roomCode+'/question').then((response) => {
                console.log('question: '+response.data);
                this.question = response.data.content;
            })
        }
    }
};

</script>

<style>
    body{
        margin: 0%;
        font-size: 25px;
    }

    .room-code-header{
        padding-top: 5px;
        background-color: #FFB700;
        color:white;
    }

    .hidden{
        display: none;
    }

    ul{
        padding:0%;
    }
    .question-card{
        background-color: #FF4519;
        color: white;
        padding: 10px;
    }
    .card{
        margin: 10px;
        margin-bottom: 5px;
        width: 240px;
        min-height: 315px;
        padding: 10px;
        border: 1px solid black;
    }

    .answer-card{
        background-color: #0293D2;
        color: white;
    }

    .displayed-cards{
        display: flex;
        flex-wrap: wrap;
    }

    .winner{
        margin-top: 30px;
    }
    .displayed-cards{
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
</style>