import { Navigation } from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <div className="header-content">
        <Navigation />
      </div>
    </Header>
  );
};
