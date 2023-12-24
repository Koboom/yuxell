<script>
    import axios from "axios"

    export default {
        errorCaptured(error, compInst, errorSrcType) {
            console.log("error: ", error)
            console.log("CompInst: ",compInst)
        },
        data() {
            return {
                toggleValue: true,
                compNbr: 1,
                data: null,
                randomMammal: null,
                thirdEl:" ",
                liTexts:["Apple","Banana","Kiwi","Tomato","Orange"],
                active : true,
                text:"Hello",
                activeFood: "food-kinds",
                foods: [
                    {name: "Pizza", imgUrl: "../src/components/icons/img_pizza.svg"},
                    {name: "Apple", imgUrl: "../src/components/icons/img_apple.svg"},
                    {name: "Fish", imgUrl: "../src/components/icons/img_fish.svg"},
                    {name: "Rice", imgUrl: "../src/components/icons/img_rice.svg"},
                    {name: "Cake", imgUrl: "../src/components/icons/img_cake.svg"},
                ]

            }
        },
        provide() {
            return {
                foods: this.foods
            }
        },
        // beforeUpdate() {
        //     this.$refs.divLog.innerHTML += "<li>Deneme.</li>"
        // },
        updated() {
            console.log("The component is updated.")
        },
        watch: {
            compNbr(val) {
                if(val>3) {
                    this.compNbr = 1
                }
            }
        },
        methods: {
             async fetchData() {
                // const response = await fetch("../src/components/bigLandMammals.json")
                // const response = await fetch("https://random-data-api.com/api/v2/users")
                // this.data = await axios.get("https://random-data-api.com/api/v2/users")
                this.data = await axios.get("https://random-data-api.com/api/v2/users")
                // this.data = await response.json()
                // const randomIndex = Math.floor(Math.random()*data.results.length)
                // this.randomMammal = data.results[randomIndex]
            },
            changeVal() {
                this.$refs.pEl.innerHTML ="Hello"
            },
            getValue() {
                this.thirdEl = this.$refs.liEl[2].innerHTML
                console.log("this.$refs.liEl[2].innerHTML : ",this.$refs.liEl)
            }
        },
        computed: {
            btnText() {
                if(this.active) {
                    return "Sil"
                }
                else {
                    return "Ekle"
                }
            },
            activeComp() {
                if(this.toggleValue) {
                    return "comp-one"
                }
                else {
                    return "comp-two"
                }
            },
            activeComp1() {
                if(this.compNbr===1) {
                    return "comp-one"
                }
                else if(this.compNbr===2) {
                    return "comp-two"
                }
                else {
                    return "comp-three"
                }
            }
        }
    }
</script>

<template>
    <div class="w3-row w3-animate-left">
        <div class="w3-col w3-container m4 l3 w3-border w3-padding w3-light-green w3-round w3-card-4" style="overflow: hidden;">
            <h2>Dinamik Component</h2>
            <KeepAlive>
                <component :is="activeComp"></component>
            </KeepAlive>
            <button class="w3-button w3-black w3-round-large w3-margin" @click="toggleValue = !toggleValue">Switch component</button>
        </div>
        <div class="w3-col w3-container m4 l3 w3-border w3-padding w3-light-green w3-round w3-card-4" style="overflow: hidden;">
            <button class="w3-button w3-black w3-round w3-margin" @click="fetchData">Fetch Data</button>
            <div v-if="data">
                <img :src="data.data.avatar" alt="">
                <h2>{{ data.data.first_name + " "+data.data.last_name }}</h2>
                <pre>{{ data.data.employment.title }}</pre>
            </div>
        </div>
        <div class="w3-col w3-containerm4 l3 w3-border w3-padding w3-light-green w3-round w3-card-4" style="overflow: hidden;" >
            <h3>Example</h3>
            <button class="w3-button w3-green w3-round" @click="getValue">Get the 3th list element</button>
            <ul class="w3-ul">
                <li v-for="x in liTexts" ref="liEl">
                    {{ x }}
                </li>
            </ul>
            <pre class="w3-red w3-round">{{ thirdEl }}</pre>
        </div>

        <div class="w3-col w3-containerm4 l3 w3-border w3-padding w3-light-green w3-round w3-card-4" style="overflow: hidden;" >
            <button class="w3-button w3-black w3-round-large w3-hover-red" @click="this.active = !this.active">{{ btnText }}</button>
            <div>
                <KeepAlive>
                    <deneme v-if="active"></deneme>
                </KeepAlive>
            </div>
        </div>
        <div class="w3-col w3-containerm4 l3 w3-border w3-padding w3-light-green w3-round w3-card-4" style="overflow: hidden;" >
            <h1>Food</h1>
            <div class="w3-btn w3-black w3-round w3-margin" @click="this.activeFood = 'food-about'">About</div>
            <div class="w3-btn w3-black w3-round w3-margin" @click="this.activeFood = 'food-kinds'">Kinds</div>
            <div  class="w3-border w3-round-xlarge w3-border-black w3-padding w3-orange w3-margin">
                <component :is="activeFood"></component>
            </div>
        </div>
    </div>
</template>

<style></style>