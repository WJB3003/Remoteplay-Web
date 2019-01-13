<template>
  <div class="user-view">
    <div class="non-mobile-view">
        PLEASE USE ON A PHONE
    </div>
    <div class="mobile-view">
        <Header msg="WELCOME TO REMOTE-PLAY"/>
        <div class="before-joining-game">
            <input v-model="input.roomCode" placeholder="Room Code"><br>
            <input v-model="input.userName" placeholder="Name"><br>
            <button v-on:click="join">JOIN</button>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Header from '@/components/Header.vue';
import router from '@/router.js';

export default {
    name: 'Join',
    components: {
        Header
    },
    data(){
        return{
            input: {
                roomCode: null,
                userName: null
            }
        }
    },
    methods: {
        join(){
            axios.post('http://localhost:8080/'+this.input.roomCode+'/players/'+this.input.userName).then((response) => {
                console.log(response.data);
            })
            this.$store.dispatch('setRoomCodeAndUsername', {
                roomCode: this.input.roomCode
            });
            this.navigate();
        },
        navigate() {
            router.push({ name: "lobby" });
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
    .before-joining-game{
        height: 100vh;
        margin-top: 37vh;
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
    .cards{
        height: 100%;
        justify-content: space-between;
    }
    input{
        text-align: center;
        width: 90%;
        font-size: 25px;
        border: 1px solid lightgray;
    }
    button{
        width: 90%;
        background-color:#0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
}
</style>