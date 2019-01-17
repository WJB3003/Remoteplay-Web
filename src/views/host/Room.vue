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
            players: [],
            polling: null
        }
    },
    created(){
        this.makeRoom();
        this.ready();
    },
    methods : {
        makeRoom(){
            axios.get('http://localhost:8080/create-room').then((response) => {
                this.roomCode = response.data.code;
                console.log(this.roomCode);
            })
        },
        gameStarted(){
            axios.get('http://localhost:8080/'+this.roomCode+'/has-game-started').then((response) => {
                this.start = response.data;
            })
            axios.get('http://localhost:8080/'+this.roomCode+'/players').then((response) => {
                this.players = response.data;
            })
            this.$store.dispatch('setRoomCodeAndUsername', {
                roomCode: this.roomCode,
                username: null
            });
            if(this.start) {
                clearInterval(this.polling)
                router.push({ name: "game-before" });
            }
        },
        ready: function () {
            this.polling = setInterval(this.gameStarted, 1000);
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
