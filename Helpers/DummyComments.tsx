export type CommentType = {
  id: number;
  user: string;
  text: string;
  timestamp: string;
  replies: CommentType[]; // Recursive type for nested replies
};

export const DummyComments: CommentType[] = [
  {
    id: 1,
    user: "JohnDoe",
    text: "This is an awesome post!",
    timestamp: "2025-03-03T10:00:00Z",
    replies: [
      {
        id: 2,
        user: "JaneSmith",
        text: "I totally agree with you!",
        timestamp: "2025-03-03T10:05:00Z",
        replies: [
          {
            id: 3,
            user: "MikeBrown",
            text: "Same here! Great insights.",
            timestamp: "2025-03-03T10:10:00Z",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    user: "EmilyClark",
    text: "Does anyone have more details on this?",
    timestamp: "2025-03-03T11:00:00Z",
    replies: [
      {
        id: 5,
        user: "ChrisWilson",
        text: "Check out the official documentation!",
        timestamp: "2025-03-03T11:15:00Z",
        replies: [
          {
            id: 6,
            user: "SaraLee",
            text: "Yes, the docs explain this well.",
            timestamp: "2025-03-03T11:20:00Z",
            replies: [],
          },
        ],
      },
      {
        id: 7,
        user: "DavidMiller",
        text: "I found a great YouTube tutorial on this topic.",
        timestamp: "2025-03-03T11:30:00Z",
        replies: [],
      },
    ],
  },
];
