import { Button } from "./button";
export const About = () => {
  return (
    <section className="grid md:grid-cols-2 md:gap-20 py-5 md:px-10">
      <div className="py-10 about">
        <h2 className="md:text-trusty-blue text-white font-bold text-3xl tracking-wider md:text-4xl py-5 capitalize heading">
          Start making edits to tools on&nbsp;
          <a
            href="https://toolhub.wikimedia.org"
            className="border-b-4 border-black mb-2"
          >
            Toolhub&nbsp;
          </a>
          for better insights and accuracy.
        </h2>
        <p className="text-lg md:text-black text-trusty-blue tracking-wider">
          Supply tool's accurate missing information to make tools complete and
          earn rewards.
        </p>
        <div className="py-4">
          <a href="#edit-section">
            <Button title="Start Editing" />
          </a>
        </div>
      </div>
      <div className="cover-image">
        <img
          src="/images/tools.jpg"
          alt="Tools on a black background"
          className="border-0 rounded-lg"
        />
      </div>
    </section>
  );
};
