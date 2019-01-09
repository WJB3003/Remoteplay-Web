<template>
    <div class="during-game-non-judge">
        <div class="header">
            YOUR HAND
        </div>
        <div class="hand">
            <button>USER CARD ONE</button><br>
            <button>USER CARD TWO</button><br>
            <button>USER CARD THREE</button><br>
            <button>USER CARD FOUR</button><br>
            <button>USER CARD FIVE</button><br>
            <button>USER CARD SIX</button><br>
            <button>USER CARD SEVEN</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Player',
    props: {
        msg: String
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
    .header{
        background-color: #FFB700;
        color:white;
        padding: 5px;
        margin-bottom: 3vh;
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
    }
}
</style>