import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const UserCard = (props) => {
  return (
    <div className="border">
      <h3 className="font-bold text-2xl text-center bg-trusty-blue md:py-5 py-3">
        {props.edits} Edits
      </h3>
      <div className="flex items-center justify-center flex-col gap-2 py-4">
        <img
          src={props.image}
          alt="user's portrait"
          className="w-20 h-20 rounded-full"
        />
        <p className="font-bold text-lg">{props.name}</p>
      </div>
      <div className="flex justify-between text-trusty-blue px-2 pb-3">
        <p className="flex gap-2 text-sm">
          <span>
            <FontAwesomeIcon icon={props.icon} />
          </span>
          <p>{props.country}</p>
        </p>
        <p className="text-trusty-blue border p-2 text-sm cursor-pointer hover:bg-trusty-blue hover:text-white">
          Congratulate
        </p>
      </div>
    </div>
  );
};
