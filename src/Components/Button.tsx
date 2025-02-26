const buttons: string[] = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Valorant",
  "ComputerGaming",
  "Radio",
  "Mixes",
  "Laptop",
  "Spotify",
  "Boadcart",
  "Podcasts",
  "Computers",
  "LoFi",
];

function Button() {
  return buttons.map(function (curr) {
    return (
      <div key={curr} className="">
        <button className="bg-[#F5F5F5] rounded px-3 ml-3 hover:bg-black hover:text-white cursor-pointer">
          {curr}
        </button>
      </div>
    );
  });
}

export default Button;
