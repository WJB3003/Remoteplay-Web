<template>
  <div class="host-view">
    <div class="after-making-room">
        <div class="room-code-header">
        ROOM CODE:
        <div class="room-code">{{this.roomCode}}</div>
    </div>

    <div class="users">
        <ul>
            <template v-for="player in players">
                {{player}}<br>
            </template>
        </ul>
    </div>

    <button v-on:click="makeRoom">MAKE ROOM</button>

    </div>

  </div>
</template>

<script>

import axios from 'axios';
import router from '@/router.js';

export default {
    name: 'Room',
    props: {
        msg: String
    },
    data: function(){
        return {
            roomCode: null,
            start: false,
            players: []
        }
    },
    methods : {
        makeRoom(){
            axios.get('http://localhost:8080/create-room').then((response) => {
                console.log(response.data.code);
                this.roomCode = response.data.code;
            })
            this.ready();
        },
        gameStarted(){
            axios.get('http://localhost:8080/'+this.roomCode+'/has-game-started').then((response) => {
                this.start = response.data;
            })
            axios.get('http://localhost:8080/'+this.roomCode+'/players').then((response) => {
                this.players = response.data;
                console.log(this.players);
            })
            if(this.start) router.push({ name: "game-before" });
        },
        ready: function () {
            setInterval(function () {
            this.gameStarted();
            }.bind(this), 1000); 
        }
    }
};
</script>

<style>
    .room-code-header{
        font-weight: bold;
    }

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

    .card{
        margin: 10px;
        margin-bottom: 5px;
        width: 240px;
        min-height: 315px;
        padding: 10px;
        border: 1px solid black;
    }

    .question-card{
        background-color: black;
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