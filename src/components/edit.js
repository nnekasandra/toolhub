import { Button } from "./button";
export const Editing = () =>{
    return (
      <section id="edit-section" className="border  p-10 mx-10 mb-10">
        <p className="text-sm tracking-wider">
          <a href="https://toolhub.wikimedia.org/tools/toolforge-videocuttool">
            VideoCutTool{" "}
          </a>
          is a video editing tool that aims to edit videos on Wikimedia Commons,
          users can also upload new videos to the tool, edit and upload the same
          to Commons on the fly! Cropping, Trimming, Audio Disabling, and Video
          Rotating are the current features of the tool. VideoCutTool works
          similarly to the Commons:CropTool.
        </p>
        <div>
          <p className="text-sm tracking-wider py-5">
            VideoCutTool is missing an <i>api-url</i> field can you supply one?
          </p>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            <input
              className="border-2 rounded-lg text-lg border-black p-2 "
              type={"url"}
              placeholder="Enter missing field ..."
              autoFocus
            />
            <Button
              title="Edit"
              onClick={console.log("You have updated the missing field")}
            />
          </div>
        </div>
      </section>
    );
}