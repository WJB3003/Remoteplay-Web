<template>
    <div class="during-game-judge">
        <div class="before-all-cards-submitted">
            <Header msg="JUDGE"/>
        </div>
        <div class="after-all-cards-submitted">
            <div class="cards">
                <ul v-for="card in cards" :key="card.content" v-on:click="select" class="card">{{card.content}}</ul> 
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from 'axios';
import router from '@/router.js';

export default {
    name: 'Judge',
    components: {
        Header
    },
    data: function(){
        return {
            cards: [],
            polling: null,
            cardsIn: false,
            content: null,
            winner: null
        }
    },
    created(){
        this.ready();
    },
    methods:{
        ready: function () {
            this.polling = setInterval(function () { 
                this.cardStatus();
                this.getCards();
                this.getWinner();
                }.bind(this), 2000); 
        },
        getCards(){
            if(this.cardsIn){
                axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/show-cards').then((response) => {
                    console.log(response.data);
                    this.cards = response.data;
                })
            }
        },
        cardStatus(){
            axios.get('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/cards').then((response) => {
                this.cardsIn = response.data;
                console.log(this.cardsIn);
            })
        },
        getWinner(){
            if(this.winner != null){
                clearInterval(this.polling);
                router.push({name: 'next-round'});
            }
        },
        select: function(e) {
            if(this.winner == null){
                this.content = e.target.innerHTML;
                console.log('selected card is: '+this.content);
                axios.post('https://remote-play.herokuapp.com/'+this.$store.getters.roomCode+'/judge-pick/'+this.content).then((response) => {
                    console.log('Winner: '+response.data.name);
                    this.winner = response.data.name;
                })
            }
        },
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
    .before-all-cards-submitted{
        background-color: #FFB700;
        color: white;
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
    }.header{
        margin: 0%;
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