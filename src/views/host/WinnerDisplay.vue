<template>
    <!-- PART FIVE -->
    <div class="display-winner">
        <div class="winning-prompt room-code-header">
            THE WINNER IS: 
        </div>

        <div class="winning-card answer-card card">
            This is a body of an answer card that would make the judge think it is clever or fun based on the question card.
        </div>

        <div class="winner">
            WILLIAM
        </div>
    </div>
</template>

<script>

export default {
    name: 'WinnerDisplay',
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
        background-color: #FFB700;
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

    .answer-card{
        background-color: #0293D2;
        color: white;
    }

    .displayed-cards{
        display: flex;
        flex-wrap: wrap;
    }

    .winner{
        margin-top: 30px;
    }

    .winning-card{
        margin-top: 2.5%;
        margin-left: 40%;
    }
</style>