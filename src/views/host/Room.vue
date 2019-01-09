<template>
  <div class="host-view">

    <!-- PART ONE -->
    <div class="pre-making-room hidden">
    <button>Make Room</button>
    </div>

    <!-- PART TWO -->
    <div class="after-making-room">
        <div class="room-code-header">
        ROOM CODE:
        <div class="room-code">
            A1B2
        </div>
    </div>

    <div class="users">
        <ul style="list-style: none;">
            <li>William</li>
            <li>Mike</li>
            <li>Eva</li>
            <li>Warren</li>
        </ul>
    </div>
    </div>

    <div class="before-submitted-cards hidden">
    <div class="question-card card">
        This is the body of a card that would need an answer to fill in the blank here ___________.
    </div>
    </div>

        <div class="after-submitted-cards hidden">
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
    name: 'Room',
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

    .room-code-header{
        padding-top: 5px;
        background-color: black;
        color:white;
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
        background-color: black;
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
</style>