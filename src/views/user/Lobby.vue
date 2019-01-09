<template>
    <div class="waiting-to-start-game">
        <div class="waiting-header">
            ROOM CODE: A1B2
        </div>
        <button>EVERYONE'S IN</button>
    </div>
</template>

<script>

export default {
    name: 'Lobby',
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
    .waiting-header{
        background-color: #FFB700;
        color:white;
        margin-bottom: 45vh;
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