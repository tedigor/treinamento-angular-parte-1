import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from '../../shared/components/card/card.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosGridComponent } from './photos-grid/photos-grid.component';
import { PhotosListComponent } from './photos-list.component';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosGridComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotosListModule {}