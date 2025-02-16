import { useSelector } from "react-redux";

type props = {
  icon: React.ReactNode;
  title: string;
};
function Sidebar({ icon, title }: props) {
  const isModelOpen = useSelector((store) => store.hamburger.isModelOpen);
  return isModelOpen ? (
    <div className="flex gap-5 text-xl items-center">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  ) : (
    ""
  );
}

export default Sidebar;
