<script>
    export default {
        data() {
            return {
                itemType:"",
                itemName:"",
                itemNumber:null,
                itemOde:"",
                preDefItems: [
                    { name: 'Burrito', type: 'Dinner', imgUrl: 'img_burrito.svg' },
                    { name: 'Pizza', type: 'Dinner', imgUrl: 'img_pizza.svg' },
                    { name: 'Pho Soup', type: 'Dinner', imgUrl: 'img_soup.svg' },
                    { name: 'Spaghetti', type: 'Dinner', imgUrl: 'img_spaghetti.svg' },
                    { name: 'Fish', type: 'Dinner', imgUrl: 'img_fish.svg' },
                    { name: 'Cake', type: 'Dessert', imgUrl: 'img_cake.svg' },
                    { name: 'Rice', type: 'Dinner', imgUrl: 'img_rice.svg' },
                    { name: 'Salad', type: 'Dinner', imgUrl: 'img_salad.svg' },
                    { name: 'Coke', type: 'Drink', imgUrl: 'img_soda.svg' },
                    { name: 'Green Soda', type: 'Drink', imgUrl: 'img_greenSoda.svg' },
                    { name: 'Doughnut', type: 'Dessert', imgUrl: 'img_doughnut.svg' },
                    { name: 'Ice Cream', type: 'Dessert', imgUrl: 'img_iceCream.svg' },
                    { name: 'Lemonade', type: 'Drink', imgUrl: 'img_lemonade.svg' },
                    { name: 'Pancakes', type: 'Dessert', imgUrl: 'img_pancakes.svg' },
                    { name: 'Water', type: 'Drink', imgUrl: 'img_water.svg' }
                ],
                order:[]
            }
        },
        methods: {
            addItem() {
                let item = {
                    name: this.itemName,
                    type: this.itemType,
                    nummer: this.itemNumber
                }
                this.order.push(item)
                this.itemName=""
                this.itemNumber=null
                this.itemType=""
            }
        }
    }
</script>

<template>
    <form action="" v-on:submit.prevent="addItem">
        <p>
            <h4>Menüler</h4>

            <label for="">
                <input type="radio" name="" id="" required value="Dinner" v-model="itemType" style="cursor: pointer;"> Akşam Yemeği
            </label><br>
            <label for="">
                <input type="radio" name="" id="" required value="Drink" v-model="itemType" style="cursor: pointer;"> İçecekler
            </label><br>
            <label for="">
                <input type="radio" name="" id="" required value="Dessert" v-model="itemType" style="cursor: pointer;"> Tatlılar
            </label><br>
        </p>
        <p v-show="itemType">
            <label>
                <select required v-model="itemName">
                    <option value="" selected disabled>Menü Seç</option>
                    <option
                    v-for="item in preDefItems"
                    v-bind:value="item.name"
                    v-show="item.type === itemType"
                    style="cursor: pointer;"
                    >
                    {{ item.name }}
                    </option>
                </select>
            </label>
        </p>
        <p v-show="itemName">
            <input type="number" placeholder="Ne kadar?" v-model="itemNumber" required style="cursor: pointer;">
        </p>
        <button type="submit" class="w3-button w3-green">Ekle</button>
    </form>
    <br>
    <hr>
    <div class="w3-container">
        <h4>Siparişiniz: </h4>
        <ul class="w3-ul">
            <li v-for="x in order">
                <div class="w3-row w3-card-4 w3-animate-left w3-padding w3-green w3-round" onclick="this.parentElement.style.display='none'" style="cursor: pointer;">
                    <div class="w3-half">{{ x.name }}</div>
                    <div class="w3-half">{{ x.nummer }}</div>
                </div>
            </li>
        </ul>
    </div>

</template>

<style></style>