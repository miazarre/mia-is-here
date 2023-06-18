import intheMood from '../../../assets/images/in-the-mood.png';
import gloupGloup from '../../../assets/images/gloup-gloup-chrome-ext.png';

const Projects = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="mt-10 ml-10 font-main text-4xl tracking-widest text-stone-950 dark:text-stone-200 hover:animate-bounce">
          Projects
        </h2>
        <div className="mt-10 ml-5 flex flex-wrap items-center sm:flex-row sm:items-start">
          <a
            href="https://inthemoodfor.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={intheMood}
              alt="In the Mood for Website"
              className="w-3/4 sm:w-3/6 border-8 border-amber-100 rounded-md transition-transform duration-300 ease-in-out transform-gpu hover:scale-125 hover-border"
            />
          </a>
          <p className="pt-5 font-second text-stone-950 dark:text-stone-200">
            A website suggesting films and series to suit our moods
          </p>
        </div>
        <div className="mt-10 ml-5">
          <a
            href="https://github.com/miazarre/gloup-gloup-chrome-ext"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gloupGloup}
              alt="Gloup Gloup Chrome Extension"
              className="w-2/4 sm:w-2/6 border-8 border-amber-100 rounded-md transition-transform duration-300 ease-in-out transform-gpu hover:scale-125 hover-border"
            />
          </a>
          <p className="pt-10 font-second text-stone-950 dark:text-stone-200">
            A small Chrome extension that lets you set an hourly reminder to
            stay hydrated.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
