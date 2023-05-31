import smiley from '../../assets/images/smiley.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="m-10 sm:mt-10 md:mt-30 pt-5 font-main text-4xl sm:text-5xl md:text-7xl tracking-wider">
      <h1 className="text-sky-600">Mia Garcia</h1>
      <p className="flex items-center pt-5 text-stone-950">
        Full Stack Web Developer
        <span style={{ display: 'inline-block' }}>
          <img src={smiley} alt="smiley" className="w-20 px-3 animate-bounce" />
        </span>
      </p>
      <div className="flex sm:justify-start items-center p-4">
        <a
          href="https://github.com/miazarre"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container group"
        >
          <FaGithub size={40} className="icon mr-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/mia-g-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container group"
        >
          <FaLinkedin size={40} className="icon" />
        </a>
      </div>
      <div className="container pt-2 text-stone-950">
        <p className="w-2/3 mb-10 font-second text-xl ">
          I spent several years working as Customer Care in tech and start-up
          companies. I turned to web development very naturally, and with great
          passion. My experiences have been very varied and have enabled me to
          acquire adaptability and a taste for challenge.
        </p>
      </div>
    </div>
  );
};

export default Header;
