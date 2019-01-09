<template>
    <div class="display-winner">
        <div class="header">ROOM CODE: A1B2</div>
        <button id="next-round">Next Round</button>
    </div>
</template>

<script>

export default {
    name: 'NextRound',
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
    #next-round{
        margin-top: 40vh;
    }
    .header{
        background-color: #FFB700;
        color:white;
        width: 100%;
        height: 5%;
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
        background-color: #0293D2;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
}
</style>