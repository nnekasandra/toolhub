import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { SideBarLists } from "./SideBarLists";

export const SideBar = () =>{
    return (
      <section className="bg-trusty-blue border-b-2 border-border-color side-bar">
        <div className="profile my-5 p-2">
          <h3 className="text-2xl text-white pb-2">Your Profile</h3>
          <div className="flex flex-col-reverse align-center justify-center gap-5">
            <div className="flex gap-6">
              <p className="text-lg text-white">Score:</p>
              <button className="p-2 font-bold border rounded-lg bg-white text-sm text-trusty-blue">
                56 Points
              </button>
            </div>
            <figure className="flex align-center justify-center flex-col">
                <img
                  src="images/portrait.jpg"
                  alt="Man's Portrait"
                  className="w-12 h-12 border-0 rounded-full"
                />
              <figcaption className="test-sm text-white font-bold">
                Alan Turing
              </figcaption>
            </figure>
          </div>
        </div>
        <div>
          <ul>
            <SideBarLists name="Home" icon={faHome} url="/" />
            <SideBarLists name="Notifications" icon={faBell} />
            <SideBarLists
              name="Dashboard"
              icon={faDashboard}
              url="/dashboard"
            />
            <SideBarLists
              name="Analytics"
              icon={faChartLine}
              url="/leaderboard"
            />
            <SideBarLists name="Settings" icon={faGear} />
          </ul>
        </div>
      </section>
    );
}