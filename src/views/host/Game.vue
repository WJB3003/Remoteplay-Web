<template>
    <div class="game">
        <div class="before-submitted-cards">
            <div class="question-card card">
                This is the body of a card that would need an answer to fill in the blank here ___________.
            </div>
            <button v-on:click="poll">TEMP POLLING BUTTON</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router.js'

export default {
    name: 'Game',
    props: {
        msg: String
    },
    data: function(){
        return {
            allIn: false,
            roomCode: null
        }
    },
    methods: {
        checkCards(){
            axios.get('http://localhost:8080/'+this.roomCode+'/cards').then((response) => {
                console.log(response.data);
                this.allIn = response.data;
            })
            if(this.allIn) router.push({ name: "game-after" });
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