import KbnBoradView from '@/components/templates/KbnBoardView.vue';
import KbnLoginView from '@/components/templates/KbnLoginView.vue';
import KbnTaskDetailModel from '@/components/templates/KbnTaskDetailModel.vue';

export default [
  {
    path: '/',
    component: KbnBoradView,
    meta: { requiresAuth: true }
  }, {
    path: '/login',
    component: KbnLoginView
  }, {
    path: '/tasks/:id',
    component: KbnTaskDetailModel,
    meta: { requiresAuth: true }
  }, {
    path: '*',
    redirect: '/'
  }
];
