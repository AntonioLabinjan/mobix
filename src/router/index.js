import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Products from '@/views/ProductsView.vue';
import Cart from '@/views/CartView.vue';
import Checkout from '@/views/CheckoutView.vue';
import About from '@/views/AboutView.vue';
import CartView from '@/views/CartView.vue';
import adminAddProduct from '@/views/adminAddProduct.vue';
import SignupComponent from '@/components/SignupComponent.vue';
import LoginComponent from '@/components/LoginComponent.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/support', component: About },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/add', component: adminAddProduct},
  { path: '/signup', component: SignupComponent},
  { path: '/login', component: LoginComponent}

];

export default createRouter({
  history: createWebHistory(),
  routes,
});
