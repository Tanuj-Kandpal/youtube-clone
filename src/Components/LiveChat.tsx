import { CgProfile } from "react-icons/cg";
import { Messages } from "../../Interfaces/Interfaces";

function LiveChat({ message, author }: Messages) {
  return (
    <>
      <div className="ml-4 flex items-center gap-2.5 w-full mb-0.5 mt-4">
        <span>
          <CgProfile />
        </span>
        <h2 className="font-medium">{author}</h2>
        <h1 className="italic">{message}</h1>
      </div>
    </>
  );
}

export default LiveChat;
