import { useState } from "preact/hooks";

export default function MyMission() {
  const [myMissions, setMyMissions] =
    useState(`I'm not quite sure what my mission is currently. I guess finding my
  mission is my mission`);
  const [mission, setMission] = useState("");
  function addMission() {
    setMyMissions(`I am currently working on this mission: ${mission}`);
    setMission("");
  }
  return (
    <div id="my-mission">
      <h1>My Mission</h1>
      <p>{myMissions}</p>
      <h3>Give me a new Mission</h3>
      <div>
        <input
          type="text"
          onChange={(e: any) => setMission(e.target.value)}
        ></input>
        <button onClick={addMission}>+</button>
      </div>
    </div>
  );
}
