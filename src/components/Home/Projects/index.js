import intheMood from '../../../assets/images/in-the-mood.png';

const Projects = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="m-10 font-main text-4xl tracking-widest text-stone-950 hover:animate-bounce">
          Projects
        </h2>
        <div className="mt-10 flex flex-wrap items-center sm:flex-row sm:items-start">
          <a
            href="https://inthemoodfor.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={intheMood}
              alt="In the Mood for Website"
              className="w-3/4 sm:w-3/6 border-8 border-teal-300 rounded-md transition-transform duration-300 ease-in-out transform-gpu hover:scale-125 hover-border"
            />
          </a>
          <p className="pt-5 font-second text-stone-95">
            A website suggesting films and series to suit our moods
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
