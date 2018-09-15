import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosListComponent,
        PhotosFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule { }