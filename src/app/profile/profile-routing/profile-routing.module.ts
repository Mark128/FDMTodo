import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';


const profileRoutes: Routes = [
  {path: '', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
})

export class ProfileRoutingModule { }