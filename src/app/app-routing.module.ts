import { AuthGuard } from './guards/auth.guard';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },



   { path: '',    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },

    { path: 'dados-exercicio',
    loadChildren: () => import('./dados-exercicio/dados-exercicio.module').then( m => m.DadosExercicioPageModule) },

    { path: 'triceps',
    loadChildren: () => import('./exercicios/triceps/triceps.module').then( m => m.TricepsPageModule) },

    { path: 'biceps',
    loadChildren: () => import('./exercicios/biceps/biceps.module').then( m => m.BicepsPageModule) },

    { path: 'dados-triceps',
    loadChildren: () => import('./exercicios/dados-triceps/dados-triceps.module').then( m => m.DadosTricepsPageModule)},

    { path: 'dados-biceps',
    loadChildren: () => import('./exercicios/dados-biceps/dados-biceps.module').then( m => m.DadosBicepsPageModule) },

    { path: 'dados-costa',
    loadChildren: () => import('./exercicios/dados-costa/dados-costa.module').then( m => m.DadosCostaPageModule) },

    { path: 'dados-peito',
    loadChildren: () => import('./exercicios/dados-peito/dados-peito.module').then( m => m.DadosPeitoPageModule)},

    { path: 'dados-quadriceps',
    loadChildren: () => import('./exercicios/dados-quadriceps/dados-quadriceps.module').then( m => m.DadosQuadricepsPageModule) },

    { path: 'dados-posterior',
    loadChildren: () => import('./exercicios/dados-posterior/dados-posterior.module').then( m => m.DadosPosteriorPageModule) },

    {  path: 'dados-ombro',
    loadChildren: () => import('./exercicios/dados-ombro/dados-ombro.module').then( m => m.DadosOmbroPageModule)},

    { path: 'costa',
    loadChildren: () => import('./exercicios/costa/costa.module').then( m => m.CostaPageModule)},

    { path: 'ombro',
    loadChildren: () => import('./exercicios/ombro/ombro.module').then( m => m.OmbroPageModule) },

    { path: 'quadriceps',
    loadChildren: () => import('./exercicios/quadriceps/quadriceps.module').then( m => m.QuadricepsPageModule) },

    { path: 'posterior',
    loadChildren: () => import('./exercicios/posterior/posterior.module').then( m => m.PosteriorPageModule) },

    { path: 'peito',
    loadChildren: () => import('./exercicios/peito/peito.module').then( m => m.PeitoPageModule)},

    { path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard] },

    { path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },

    { path: 'tabs1',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule) },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./exercicios/cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'dados-cardio',
    loadChildren: () => import('./exercicios/dados-cardio/dados-cardio.module').then( m => m.DadosCardioPageModule)
  },
  {
    path: 'meutreino',
    loadChildren: () => import('./pages/meutreino/meutreino.module').then( m => m.MeutreinoPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
