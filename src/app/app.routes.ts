import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SearchComponent } from './search/search.component';
import { AddbookComponent } from './addbook/addbook.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'searchbooks', component: SearchComponent},
    {path: 'addbook', component: AddbookComponent}
];
