import HomeComponent from './HomeComponent.vue';
import SumaCheckBox from './SumaCheckBox.vue';
import PadreDeportes from './PadreDeportes.vue';
import ComicsComponent from './ComicsComponent.vue';
import NumeroDoble from './NumeroDoble.vue';
import TablaMultiplicar from './TablaMultiplicar.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/deportes', component: PadreDeportes},
    {path: '/comics', component: ComicsComponent},
    {path: '/checkbox', component: SumaCheckBox},
    {path: '/numerodoble/:numero?', component: NumeroDoble},
    {path: '/tablamultiplicar/:numero?', component: TablaMultiplicar},
]

const router = createRouter({history: createWebHistory(), routes})

export default router;