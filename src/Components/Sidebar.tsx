type props = {
  icon: React.ReactNode;
  title: string;
};
function Sidebar({ icon, title }: props) {
  return (
    <div className="flex gap-5 text-xl">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}

export default Sidebar;
