import HomeComponent from './HomeComponent.vue';
import SumaCheckBox from './SumaCheckBox.vue';
import PadreDeportes from './PadreDeportes.vue';
import ComicsComponent from './ComicsComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/deportes', component: PadreDeportes},
    {path: '/comics', component: ComicsComponent},
    {path: '/checkbox', component: SumaCheckBox},
]

const router = createRouter({history: createWebHistory(), routes})

export default router;