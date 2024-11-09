import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterComponent },
    { path: '**', component: NotFoundComponent },
];
