export const Arrange = (props) =>{
    return (
          <tbody>
            <tr>
              <td>
                <div className="flex gap-4">
                  <img
                    src={props.image}
                    alt="user's portrait"
                    className="w-10 h-10 rounded-full"
                  />
                  <p>{props.name}</p>
                </div>
              </td>
              <td>{props.edits}</td>
              <td>{props.score}</td>
            </tr>
          </tbody>
    );
}