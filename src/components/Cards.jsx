import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cards = (props) => {
    return (
      <section className="border p-4 rounded-lg border-l-4 card flex gap-10">
        <FontAwesomeIcon
          icon={props.icon}
          className="p-3 border rounded-full bg-trusty-blue"
        />
        <div className="">
          <h3 className="font-bold">{props.title}</h3>
          <p>{props.metrics}</p>
        </div>
      </section>
    );
}