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
        path: 'series',
        loadComponent: () => import('./ui/pages/series/series.component').then((c) => c.SeriesComponent),
        children: [
            {
                path: "gender",
                loadComponent: () => import('./ui/pages/series/section-gender-series/section-gender-series.component').then((c) => c.SectionGenderSeriesComponent)
            }
        ]
    },
    {
        path: "**",
        redirectTo: "music",
        pathMatch: "full"
    }
];
