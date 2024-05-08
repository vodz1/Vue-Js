
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter , createWebHistory } from 'vue-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductsComponent from './components/ProductsComponent.vue';
import FormComponent from './components/FormComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import ProductDetailsComponent from './components/ProductDetailsComponent.vue';
import AddComponent from './components/AddComponent.vue';
import store from './Store.js'
const routes = [
{path:'/',
component: FormComponent
},
{path:'/products',
component: ProductsComponent
},
{path:'/products/:id',
component: ProductDetailsComponent
},
{path:'/products/add',
component: AddComponent
},
{path:'/:NotFound(.*)*',
component: ErrorComponent
}
]

let router = createRouter({
    history : createWebHistory(),
    routes
})

createApp(App).use(store).use(router).mount('#app')
