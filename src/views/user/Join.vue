<template>
  <div class="user-view">
      <div class="non-mobile-view">
          PLEASE USE ON A PHONE
      </div>
      <div class="mobile-view">
        <!-- PART ONE -->
        <div class="before-joining-game">
            <input placeholder="Room Code"></br>
            <input placeholder="Name"></br>
            <button>JOIN</button>
        </div>

        <!-- PART TWO -->
        <div class="waiting-to-start-game hidden">
            <div class="waiting-header">
                A1B2
            </div>
            <button>EVERYONE'S IN</button>
        </div>

        <!-- PART THREE -->
        <div class="during-game-judge">
            <div class="before-all-cards-submitted hidden">
                WAITING FOR PEOPLE TO SUBMIT CARDS
            </div>
            <div class="after-all-cards-submitted hidden">
                <div class="cards">
                    <button>SUBMITTED CARD ONE</button></br>
                    <button>SUBMITTED CARD TWO</button></br>
                    <button>SUBMITTED CARD THREE</button></br>
                    <button>SUBMITTED CARD FOUR</button>
                </div>
            </div>
        </div>

        <!-- PART FOUR -->
        <div class="during-game-non-judge hidden">
            <div class="hand">
                <button>USER CARD ONE</button></br>
                <button>USER CARD TWO</button></br>
                <button>USER CARD THREE</button></br>
                <button>USER CARD FOUR</button></br>
                <button>USER CARD FIVE</button></br>
                <button>USER CARD SIX</button></br>
                <button>USER CARD SEVEN</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Join',
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
    .before-all-cards-submitted{
        padding: 5px;
        background-color:black;
        color: white;
    }
    .cards button{
        width: 100%;
        height: 100vh;
    }
    .waiting-header{
        background-color: black;
        color:white;
        margin-bottom: 45vh
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
    .before-joining-game{
        height: 100%;
        width: 100%;
    }
    .hidden{
        display: none;
    }
    .cards{
        height: 100%;
        justify-content: space-between;
    }
    input{
        text-align: center;
        width: 90%;
        font-size: 25px;
        border: 1px solid lightgray;
    }
    button{
        width: 90%;
        background-color:black;
        color:white;
        border: 1px solid lightgray;
        font-size: 25px;
    }
}
</style>