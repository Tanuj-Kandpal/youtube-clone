import { CgProfile } from "react-icons/cg";

function LiveChat({ messages }) {
  return (
    <>
      <div
        className=" ml-4 flex items-center
      gap-2.5 w-full overflow-y-scroll mb-0.5 mt-4"
      >
        <span>
          <CgProfile />
        </span>
        <h1>{messages.message}</h1>
      </div>
    </>
  );
}

export default LiveChat;
