import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotosListResolver } from './photos/photos-list/photos-list.resolver';


const routes: Routes = [
    { 
        path: 'user/:userName', 
        component: PhotosListComponent,
        resolve: {
            photos: PhotosListResolver
            } 
    },
    { 
        path: 'add/photos', 
        component: PhotosFormComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }