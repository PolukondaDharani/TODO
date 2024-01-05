import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErroComponent } from './erro/erro.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGaurdService]},
  {path:'todos',component:ListtodosComponent,canActivate:[RouteGaurdService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGaurdService]},
  {path:'todo/:id',component:TodoComponent}, 
  {path:'**',component:ErroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
