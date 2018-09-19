import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotosFormModule } from './photos-form/photos-form.module';
import { PhotosListModule } from './photos-list/photos-list.module';



@NgModule({
    imports: [
        PhotoModule,
        PhotosListModule,
        PhotosFormModule,
        CommonModule,
    ]
})

export class PhotosModule { }