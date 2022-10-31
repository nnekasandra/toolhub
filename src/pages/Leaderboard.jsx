import { Arrange } from "../components/Arrange";
import { UserCard } from "../components/UserCard";

import { faMap } from "@fortawesome/free-solid-svg-icons";
export const Leaderboard = ()=>{
    return (
      <main>
        <section className="leaderboard text-white ">
          <h2 className="font-bold text-3xl py-8">ToolEdit &gt; LeaderBoard</h2>
          <p className="text-lg">
            Meet the Top Editors. Get by to <a href="/">Editing</a> and increase
            your score and rank.
          </p>
        </section>
        <section className="p-10">
          <h2 className="text-3xl font-bold">Top Editors</h2>
          <div className="grid md:grid-cols-3 gap-8 py-5">
            <UserCard
              name="Josh Kora"
              edits={30}
              image="images/portrait.jpg"
              country="Baltimore"
              icon={faMap}
            />
            <UserCard
              name="Timi Great"
              edits={25}
              image="images/portrait2.jpg"
              country="Nigeria"
              icon={faMap}
            />
            <UserCard
              name="Robert Greg"
              edits={20}
              image="images/portrait3.jpg"
              country="Canada"
              icon={faMap}
            />
          </div>
        </section>
        <section className="p-10">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Number of Edits</th>
                <th>Score</th>
              </tr>
            </thead>
            <Arrange
              name="Josh Kora"
              edits={30}
              score={150}
              image="images/portrait.jpg"
            />
            <Arrange
              name="Timi Great"
              edits={25}
              score={125}
              image="images/portrait.jpg"
            />
            <Arrange
              name="Robert Greg"
              edits={20}
              score={100}
              image="images/portrait.jpg"
            />
            <Arrange
              name="Martin Goldie"
              edits={10}
              score={50}
              image="images/portrait3.jpg"
            />
            <Arrange
              name="Precious Sam"
              edits={9}
              score={45}
              image="images/portrait2.jpg"
            />
            <Arrange
              name="Grace Tim"
              edits={7}
              score={35}
              image="images/portrait2.jpg"
            />
            <Arrange
              name="Peacewill Brutt"
              edits={5}
              score={25}
              image="images/portrait.jpg"
            />
            <Arrange
              name="Kamsi Nuel"
              edits={3}
              score={15}
              image="images/portrait3.jpg"
            />
          </table>
        </section>
      </main>
    );
}