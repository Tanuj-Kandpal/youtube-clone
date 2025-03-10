import { useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../../store/store";

type props = {
  icon: React.ReactNode;
  title: string;
  path?: string;
};
function Sidebar({ icon, title, path }: props) {
  const isModelOpen = useSelector(
    (store: RootState) => store.hamburger.isModelOpen
  );
  return isModelOpen ? (
    <div>
      <Link className="flex gap-5 text-xl items-center" to={`${path}`}>
        <div>{icon}</div>
        <div>{title}</div>
      </Link>
    </div>
  ) : (
    ""
  );
}

export default Sidebar;
