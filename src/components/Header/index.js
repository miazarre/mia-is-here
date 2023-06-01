import smiley from '../../assets/images/smiley.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="m-10 sm:mt-10 md:mt-30 pt-5 font-main text-4xl sm:text-5xl md:text-7xl tracking-widest">
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
    </div>
  );
};

export default Header;
