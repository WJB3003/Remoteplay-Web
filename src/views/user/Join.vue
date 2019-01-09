<template>
  <div class="user-view">
    <div class="non-mobile-view">
        PLEASE USE ON A PHONE
    </div>
    <div class="mobile-view">
        <div class="before-joining-game">
            <input id="room-code" placeholder="Room Code"><br>
            <input id="username" placeholder="Name"><br>
            <button id="join-button" v-on:click="join">JOIN</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Join',
    props: {
        msg: String
    },
    methods: {
        join: function(event) {
            var rooms = axios.get('http://localhost:8080/rooms')
            alert(rooms);
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
    .waiting-header{
        background-color: #FF3100;
        color:white;
        margin-bottom: 45vh
    }
    .before-joining-game{
        height: 100vh;
        margin-top: 40vh;
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