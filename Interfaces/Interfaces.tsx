type Author = string;
type Message = string;

export interface Messages {
  author: Author;
  message: Message;
}

interface Item {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
}
export type Items = Item[];

export type ApiResponse = {
  kind?: string;
  etag?: string;
  items?: Items;
};

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

// [
//   {
//     items: [
//       {
//         id: "",
//         snippet: {
//           channelId: "",
//           title: "",
//           thumbnails: {
//             medium: {
//               url: "",
//             },
//           },
//           channelTitle: "",
//         },
//       },
//     ],
//   },
// ];
