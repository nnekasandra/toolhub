export const Image = (props) =>{
    return (
      <figure>
        <img
          src={props.src}
          alt={props.alt}
        />
        <figcaption className="text-center text-sm">{props.caption} </figcaption>
      </figure>
        
    );
}