import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { PropertyComponent } from './pages/general/property/property.component';
import { RegistryComponent } from './pages/general/registry/registry.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'property', component: PropertyComponent, },
    { path: 'registry', component: RegistryComponent, },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}