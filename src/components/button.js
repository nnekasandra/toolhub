export const Button = (props) =>{
    return (
      <button
        className="text-bold bg-trusty-blue p-4 text-white text-2xl border-0 rounded-full cursor-pointer"
        onClick={console.log("You have updated the missing field")}
      >
        {props.title}
      </button>
    );
}