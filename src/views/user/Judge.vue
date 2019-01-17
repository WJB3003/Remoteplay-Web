<template>
    <div class="during-game-judge">
        <div class="before-all-cards-submitted">
            <Header msg="WAITING FOR USERS"/>
        </div>
        <div class="after-all-cards-submitted hidden">
            <Header msg="PICK BEST CARD"/>
            <div class="hand">
                <button>SUBMITTED CARD ONE</button><br>
                <button>SUBMITTED CARD TWO</button><br>
                <button>SUBMITTED CARD THREE</button><br>
                <button>SUBMITTED CARD FOUR</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'Judge',
    components: {
        Header
    },
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
    .cards button{
        width: 100%;
        height: 100vh;
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
    button{
        width: 90%;
        background-color:#0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
}
</style>