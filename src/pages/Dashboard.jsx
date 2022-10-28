import { Boards } from "../components/Boards";
import { SideBar } from "../components/SideBar";

export const Dashboard = () =>{
    return (
      <main className="grid grid-cols-3 gap-10 md:gap-10" id="main">
        <SideBar />
        <Boards />
      </main>
    );
}