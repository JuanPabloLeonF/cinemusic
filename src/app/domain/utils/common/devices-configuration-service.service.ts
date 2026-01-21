import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevicesConfigurationServiceService {

  constructor() { }

  public setMediaSessionMetadata(title: string, artist: string, album: string, artwork: string[] = []): void {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: title,
        artist: artist,
        album: album,
        artwork: artwork.map(src => ({ src: src, sizes: '512x512' }))
      });
    }
  }

  public playBackState(): void {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'playing';
    }
  }

  public stopBackState(): void {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'paused';
    }
  }

  public setMediaSessionHandlers(
    playHandler: () => void,
    pauseHandler: () => void,
    nextTrackHandler: () => void,
    previousTrackHandler: () => void
  ): void {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', playHandler);
      navigator.mediaSession.setActionHandler('pause', pauseHandler);
      navigator.mediaSession.setActionHandler('nexttrack', nextTrackHandler);
      navigator.mediaSession.setActionHandler('previoustrack', previousTrackHandler);
    }
  }

  public clearMediaSessionHandlers(): void {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', null);
      navigator.mediaSession.setActionHandler('pause', null);
      navigator.mediaSession.setActionHandler('nexttrack', null);
      navigator.mediaSession.setActionHandler('previoustrack', null);
    }
  }
}