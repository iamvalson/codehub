import Icon from "../custom-ui/Icon";

const Header = () => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <Icon
        name="waving_hand"
        size={64}
        className="text-codehub-primary text-[64px] xl:text-[96px]"
      />
      <div>
        <h1 className="text-white text-3xl font-bold font-display">
          Welcome, Alex
        </h1>
        <p className="font-display text-slate-400">
          Pick up where you left off. You have 2 assignments due soon.
        </p>
      </div>
    </div>
  );
};
export default Header;
