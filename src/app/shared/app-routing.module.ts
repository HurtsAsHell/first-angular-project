import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ConcorrenteComponent } from '../components/concorrente.component';
import { ConcorrentiComponent } from '../components/concorrenti.component';
import { HomeComponent } from '../components/home.component';
import { ListaConcorrentiComponent } from '../components/lista-concorrenti.component';

import { LoginComponent } from '../components/login.component';
import { NotAuthGuard } from '../not-auth.guard';

const routes: Routes = [
	{
		path : "login", component:LoginComponent,
		canActivate : [NotAuthGuard]
	},

	{
		path : "home", component:HomeComponent,
		canActivate : [AuthGuard]
	},

	{
		path : "lista-c", component:ListaConcorrentiComponent,
		canActivate : [AuthGuard]
	},

	{
		path : "aggiungi-c", component:ConcorrentiComponent,
		canActivate : [AuthGuard]
	},

	{
		path : "concorrente", component:ConcorrenteComponent,
	},

	{
		path : "**", redirectTo: 'login', pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
