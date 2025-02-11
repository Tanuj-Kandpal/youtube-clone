import { AiFillLike } from "react-icons/ai";
import { BiSolidVideos } from "react-icons/bi";
import { FaBook, FaDiscourse, FaHistory } from "react-icons/fa";
import { FaMoneyCheckDollar, FaScissors } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import {
  MdHome,
  MdLibraryMusic,
  MdPlaylistPlay,
  MdSubscriptions,
  MdWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import Sidebar from "./Sidebar";
function Body() {
  return (
    <div className="m-11 h-screen flex">
      {/* Left SideBar */}
      <div className=" h-1/5 flex flex-col gap-6">
        <Sidebar icon={<MdHome />} title={"Home"}></Sidebar>
        <Sidebar icon={<SiYoutubeshorts />} title={"Shorts"}></Sidebar>
        <Sidebar icon={<MdSubscriptions />} title={"Subscription"}></Sidebar>
        <Sidebar icon={<FaHistory />} title={"History"}></Sidebar>
        <Sidebar icon={<MdPlaylistPlay />} title={"Playlists"}></Sidebar>
        <Sidebar icon={<BiSolidVideos />} title={"Your Videos"}></Sidebar>
        <Sidebar icon={<FaDiscourse />} title={"Your Courses"}></Sidebar>
        <Sidebar icon={<MdWatchLater />} title={"Watch Later"}></Sidebar>
        <Sidebar icon={<AiFillLike />} title={"Like Videos"}></Sidebar>
        <Sidebar icon={<FaScissors />} title={"Your Clip"}></Sidebar>
        <Sidebar
          icon={<FaMoneyCheckDollar />}
          title={"Money Control"}
        ></Sidebar>
        <Sidebar icon={<MdLibraryMusic />} title={"Lofi"}></Sidebar>
        <Sidebar icon={<FaBook />} title={"Playlists"}></Sidebar>
        <Sidebar icon={<IoGameController />} title={"Study iq"}></Sidebar>
      </div>
      {/* Videos Section */}
      <div className="h-4/5">
        <h1>Videos</h1>
      </div>
    </div>
  );
}

export default Body;
