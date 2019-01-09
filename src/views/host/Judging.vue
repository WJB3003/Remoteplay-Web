<template>
    <div class="game">
        <div class="after-submitted-cards">
            <div class="displayed-cards">
                <div class="question-card card">
                    This is the body of a card that would need an answer to fill in the blank here ___________.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
                <div class="answer-card card">
                    This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Judging',
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
        background-color: #0293D2;
        color: white;
    }
    .displayed-cards{
        display: flex;
        flex-wrap: wrap;
    }
</style>