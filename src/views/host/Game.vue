<template>
    <div class="game">
        <!-- PART THREE -->
        <div class="before-submitted-cards">
            <div class="question-card card">
                This is the body of a card that would need an answer to fill in the blank here ___________.
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Game',
    props: {
        msg: String
    },
};

</script>

<style>
    body{
        margin: 0%;
        font-size: 25px;
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
        background-color: #FF4519;
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