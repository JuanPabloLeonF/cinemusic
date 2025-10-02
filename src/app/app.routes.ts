import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'music',
        loadComponent: () => import('./ui/pages/music/music.component').then((c) => c.MusicComponent),
        children: [
            {
                path: 'myMusic',
                loadComponent: () => import('./ui/pages/music/section-play-list-songs/section-play-list-songs.component').then((c) => c.SectionPLayListSongsComponent)
            }
        ]
    },
    {
        path: "**",
        redirectTo: "music",
        pathMatch: "full"
    }
];
