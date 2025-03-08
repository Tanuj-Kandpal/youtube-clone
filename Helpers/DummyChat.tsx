export function getRandomMessage() {
  const messages = [
    { text: "Hey everyone! What's up?", author: "JohnDoe99" },
    {
      text: "Did anyone see the latest episode? Crazy twist!",
      author: "MovieBuff23",
    },
    { text: "Lol, that was hilarious! 😂", author: "MemeKing" },
    {
      text: "Can someone help me with this issue? My app keeps crashing.",
      author: "TechGeek42",
    },
    { text: "Bruh, my internet is lagging so bad. 😭", author: "GamerDude" },
    {
      text: "Shoutout to the mods for keeping the chat clean! 👏",
      author: "CoolCat",
    },
    { text: "Wait, what did I miss? Just joined!", author: "LateToTheParty" },
    { text: "OMG, that play was insane! 🔥", author: "SportsFan22" },
    { text: "Who's hyped for the next event? 🚀", author: "HypeTrain" },
    { text: "LMAO, that was unexpected!", author: "RandomDude" },
    { text: "Anyone else here from India? 🇮🇳", author: "DesiGamer" },
    { text: "Bro, this chat is moving so fast. 😂", author: "SpeedyChat" },
    {
      text: "Can we appreciate how awesome this stream is? 👏",
      author: "FanBoy",
    },
    {
      text: "Nah, that take is wild. No way that's true. 🤨",
      author: "Debater69",
    },
    { text: "GG, well played! 🎮", author: "ProGamerX" },
    {
      text: "Anyone got a good playlist recommendation?",
      author: "MusicLover",
    },
    {
      text: "Yo, this is my first time here. Loving the vibe!",
      author: "Newbie101",
    },
    {
      text: "Why is everyone spamming? Mods, help! 😅",
      author: "RuleFollower",
    },
    {
      text: "I can’t believe that just happened. Best moment ever!",
      author: "ExcitedViewer",
    },
    { text: "Alright, I’m out. See y’all next time!", author: "CasualWatcher" },
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}