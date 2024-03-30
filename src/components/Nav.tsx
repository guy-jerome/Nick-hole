import { FunctionComponent } from "preact";

interface NavProps {
  handleChange: (page: string) => void;
}

const Nav: FunctionComponent<NavProps> = ({ handleChange }) => {
  return (
    <div id="nav">
      <button onClick={() => handleChange("main")}>Home</button>
      <button onClick={() => handleChange("about")}>About</button>
      <button onClick={() => handleChange("mission")}>My Mission</button>
    </div>
  );
};

export default Nav;
