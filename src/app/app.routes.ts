import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'music',
        loadComponent: () => import('./ui/pages/music/music.component').then((c) => c.MusicComponent),
    },
    {
        path: "**",
        redirectTo: "music",
        pathMatch: "full"
    }
];
