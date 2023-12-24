<script>
    export default {
        data() {
            return {
                inpName: "",
                product: ["Apple","Pizza","Rice"],
                dice: [],
                inpDiceName: "",
                reDive: [],

            }
        },
        methods: {
            addEl() {
                const el = this.inpName
                this.product.push(el)
                this.inpName=null
            },
            addDie() {
                const newDie = Math.ceil(Math.random()*6)
                this.dice.push(newDie)
            },
            removeDie() {
                if(this.dice.length>0) {
                    this.dice.splice(Math.floor(Math.random()*this.dice.length), 1)
                }
            }
        },
        mounted() {
            this.addDie()
            this.addDie()
            this.addDie()
        }
    }
</script>
<template>
    <div class="w3-container ">

        <div class="w3-row w3-animate-left">

            <div class="w3-col w3-container m4 l3 w3-border w3-padding w3-light-green w3-card-4">
                <h2>Transition Component</h2>
                <!-- <input type="text" v-model="inpName" @keydown.enter="addEl">
                <button @click="addEl" class="w3-button w3-black w3-padding w3-margin">Add</button>
                <TransitionGroup tag="ol" class="">
                    <li v-for="x in product" :key="x" class="">
                        <div onclick="this.parentElement.style.display='none'" style="cursor: pointer;" class="">
                            {{ x }}
                        </div>
                    </li>
                </TransitionGroup> -->
            </div>

            <div class="w3-col w3-container m4 l3 w3-border w3-padding w3-light-green w3-card-4">
                <h2>TransitionGroup</h2>
                <button @click="addDie" class="w3-button w3-black w3-round">Roll</button>
                <button @click="removeDie" class="w3-button w3-black w3-round">Remove random</button><br>
                <TransitionGroup>
                    <div v-for="x in dice" :key="x" class="diceDiv"  :style="{ backgroundColor: 'hsl('+x*40+', 85%, 85%)'}">
                        {{ x }}
                    </div>
                </TransitionGroup>
            </div>

        </div>

    </div>
</template>

<style>
    .v-enter-from {
        /* opacity:0; für TransitionComponent
        rotate: 180deg; */
        opacity: 0;
        translate: 200px 0;
        rotate: 360deg;
    }
    .v-enter-to {
        opacity: 1;
        translate: 0 0;
        rotate: 0deg;
    }
    .v-enter-active, .v-leave-active, .v-move {
        transition: all 0.7s;
    }
    .v-leave-active {position: absolute;}
    .v-leave-from {opacity: 1;}
    .v-leave-to {opacity: 0;}
    .diceDiv{
        margin: 10px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        vertical-align: middle;
        text-align: center;
        border: solid black 1px;
        border-radius: 5px;
        display: inline-block;
    }

</style>
