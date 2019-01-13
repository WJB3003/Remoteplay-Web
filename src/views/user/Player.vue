<template>
    <div class="during-game-non-judge">
        <div class="header">
            <b>YOUR HAND</b>
        </div>
        <div class="hand">
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button><br>
            <button>This is a body of an answer card that would make the judge think it is clever or fun based on the question card.(user)</button>
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
        padding: 10px;
    }
}
</style>