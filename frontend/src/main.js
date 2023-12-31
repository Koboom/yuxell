// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppHeader from "./components/Shared/appHeader.vue"
import OrderVue from "./components/Order.vue"
import FoodItem from "./components/FoodItem.vue"
import TodoList from "./components/TodoList.vue"
import CompTwo from "./components/CompTwo.vue"
import CompOne from "./components/CompOne.vue"
import SlotComp from "./components/SlotComp.vue"
import SlotComp1 from "./components/SlotComp1.vue"
import CompThree from "./components/CompThree.vue"
import Deneme from "./components/Deneme.vue"
import FoodAbout from "./components/FoodAbout.vue"
import FoodKinds from "./components/FoodKinds.vue"
import TransitionGroupExercise from "./components/TransitionGroupExercise.vue"


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("appHeader", AppHeader)//global
app.component("order-vue",OrderVue)
app.component("food-item",FoodItem)
app.component("todo-list",TodoList)
app.component("comp-two",CompTwo)
app.component("comp-one",CompOne)
app.component("comp-three",CompThree)
app.component("slot-comp",SlotComp)
app.component("slot1-comp1",SlotComp1)
app.component("deneme",Deneme)
app.component("food-about",FoodAbout)
app.component("food-kinds",FoodKinds)
app.component("transition-GroupExercise",TransitionGroupExercise)


app.use(createPinia())
app.use(router)

app.mount('#app')
