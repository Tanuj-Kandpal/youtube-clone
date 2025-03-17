type Author = string;
type Message = string;

export interface Messages {
  author: Author;
  message: Message;
}


export type VideoItem = {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
  };
};

export type ApiOutputState = {
  items: VideoItem[];
};