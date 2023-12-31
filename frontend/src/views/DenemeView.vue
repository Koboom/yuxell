<script>
    import CompOne from "../components/CompOne.vue"

    export default {
        components: {
            "comp-one": CompOne
        },
        data() {
            return {
                newItem: "",
                items:[
                    "ekmek",
                    "su"
                ],
                foods: [
                     { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true},
                     { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false},
                     { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false},
                     { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true},
                     { name: 'Cake', desc: 'Cake is something sweet that tates good.', favorite: false}
                ],
                essens: [
                    { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_cake.svg'},
                    { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: '../components/icons/img_cake.svg'},
                    { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: '../components/icons/img_cake.svg'},
                    { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: '../components/icons/img_cake.svg'},
                    { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: '../components/icons/img_cake.svg'}
                ],
            }
        },
        methods: {
            recieveEmit(foodId) {
                let foundFood=this.foods.find(
                    food => food.name === foodId
                )
                foundFood.favorite = !foundFood.favorite
            },
            addTodo(){
                this.items.push(this.newItem)
                this.newItem=""
            }
        }
    }
</script>
<template>
    <div class="y-row">
        <div class="y-col y-container m4 l3 y-border y-padding y-light-green y-margin y-round y-card-4" style="overflow: hidden;">
            <h3>Favoriler Listesi:</h3>
            <food-item
                v-for="x in foods"
                :key="x.name"
                :food-name="x.name"
                :food-desc="x.desc"
                :is-favorite="x.favorite"
                style="background-color: lightgreen; overflow: hidden; border: solid black 1px; border-radius: 10px; margin: 3px;"
                @toggle-favorite="recieveEmit"
            />
        </div>
        <div class="y-col y-container m4 l3 y-border y-light-green y-padding y-round y-card-4 y-margin">
            <h3>Yapılacaklar Listesi: </h3>
            <ul class="y-ul">
                <todo-list
                    v-for="x in items"
                    :key="x"
                    :todo-name="x"
                    class="y-orange y-round-large y-hover-blue y-card-4 y-margin y-padding"
                />
            </ul>
            <br>
            <input type="text" placeholder="Yeni iş ekle.." v-model="newItem" @keydown.enter="addTodo">
        </div>

        <div class="y-col y-container m4 l3 y-border y-light-green y-padding y-round y-card-4 y-margin">
            <h3>Local Component</h3>
            <comp-one/><br>
            <comp-two/>
        </div>
        <div class="y-col y-container m4 l3 y-border y-light-green y-padding y-round y-card-4 y-margin">
            <h3>Slots in Vue</h3>
            <slot-comp
            v-for="x in essens"
            >
            <img v-bind:src="x.url" alt="">
            <h5>{{ x.name }}</h5>
            <p>{{ x.desc }}</p>
            </slot-comp>
        </div>
        <div class="y-col y-container m4 l3 y-border y-light-green y-padding y-round y-card-4 y-margin" style="overflow: hidden;">
            <order-vue/>
        </div>
        <div class="y-col y-container m4 l3 y-border y-light-green y-padding y-round y-card-4 y-margin" style="overflow: hidden;">
            <h1>app.vue</h1>
            <slot1-comp1 v-slot="food">
                <h2>{{ food.foodName }}<img :src="food.foodUrl" alt=""></h2>
                <p>{{ food.foodDesc }}</p>
            </slot1-comp1>
        </div>
    </div>
</template>
<style></style>