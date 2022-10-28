import { Arrange } from "../components/Arrange";

export const Leaderboard = ()=>{
    return (
      <main>
        <div>
          <h2>ToolEdit LeaderBoard</h2>
          <p>
            Meet the Top Editors. Get by to <a href="/">Editing</a> and increase
            your score and rank.
          </p>
        </div>
        <Arrange name="Josh Kora" edits={30} score={150} image="images/portrait.jpg" />
        <Arrange name="Timi Great" edits={25} score={125} image="images/portrait.jpg" />
        <Arrange name="Robert Greg" edits={20} score={100} image="images/portrait.jpg" />
        <Arrange name="Martin Gold" edits={10} score={50} image="images/portrait.jpg" />
        <Arrange name="Precious Sam" edits={3} score={15} image="images/portrait.jpg" />
      </main>
    );
}