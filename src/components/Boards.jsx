import { faChartPie, faChartSimple, faInfoCircle,faSearch, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cards } from "./Cards";
import { Image } from "./Image";
export const Boards = () =>{
    return (
      <section className="relative col-span-2 p-5 boards border m-5">
        <div className="flex justify-between pb-4">
          <div>
            <h2 className="text-2xl font-bold text-trusty-blue">Dashboard</h2>
            <p className="md:text-lg text-sm tracking-wider">
              502+ tools have been updated using ToolEdit.
            </p>
          </div>
          <div className="relative">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="w-full p-2 border-2 border-trusty-blue rounded-lg"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-3"
            />
          </div>
        </div>
        <div className="grid align-center justify-center">
          <img src="images/graph1.webp" alt="growing chart" className="img" />
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10">
          <Cards icon={faTools} title="Total Number of Tools" metrics="2702" />
          <Cards
            icon={faInfoCircle}
            title="Number of Tools With Missing Fields"
            metrics="2200"
          />
          <Cards
            icon={faChartPie}
            title="Percentage of Updated Tools"
            metrics="18.58%"
          />
          <Cards
            icon={faChartSimple}
            title="Percentage of Tools With Missing Field"
            metrics="81.42%"
          />
        </div>
        <div className="grid md:grid-cols-2">
          <Image
            src="images/graph3.webp"
            alt="charts and demonstrations"
            caption="Tools Metrics"
          />
          <Image
            src="images/graph3.webp"
            alt="charts and demonstrations"
            caption="Tools Metrics"
          />
        </div>
      </section>
    );
}