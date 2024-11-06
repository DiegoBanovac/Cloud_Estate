const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/kupnja_nekretnina', component: () => import('pages/KupnjaNekretninaPage.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/registracija', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/najam_nekretnina', component: () => import('pages/NajamNekretninaPage.vue') },
      { path: '/mapa_nekretnina', component: () => import('pages/MapaNekretninaPage.vue') },
    ]
    
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
