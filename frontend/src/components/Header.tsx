import Topbar from "./Topbar";

export type NavTab = {
  name: string;
  href: string;
  current: boolean;
};

export type HeaderProps = {
  navMenu: NavTab[];
};

const Header = ({ navMenu }: HeaderProps) => {
  return (
    <header className="bg-background-dark sticky px-4 py-2 border-b border-b-codehub-primary/10">
      <Topbar navMenu={navMenu} />
    </header>
  );
};
export default Header;
