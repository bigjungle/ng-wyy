/*export type HttpRes<T> = {
  code: number;
  [key: string]: T;
}*/


export type Banner = {
  targetId: number;
  url: string;
  imageUrl: string;
  bgColor?: string;
}

export type HotTag = {
  id: number;
  name: string;
  position: number;
}

export type SongSheet = {
  id: number;
  name: string;
  picUrl?: string;
  coverImgUrl?: string;
  playCount: number;
}


export type playlistInfo = {
  code: number;
  more: boolean;
  total: number;
  playlists: SongSheet[];
}


export interface Song {
  id: number;
  name: string;
  ar: Singer[];
  al: { picUrl: string; };
  dt: number;
}

export type Singer = {
  id: number;
  name: string;
}


export type SongUrl = {
  id: number;
  url: string;
}

export type Lyric = {
  lyric: string;
  tlyric: string | null;
}
