import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const SideBarLists = (props)=>{
    return (
      <li>
        <a
          href={props.url}
          className="hover:text-trusty-blue hover:bg-white flex gap-5 text-white text-lg p-5 mr-1 transition border-b border-border-color"
        >
          <span class="icon">
            <FontAwesomeIcon icon={props.icon} />
          </span>
          <span class="item">{props.name}</span>
        </a>
      </li>
    );
}