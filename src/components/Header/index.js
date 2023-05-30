import smiley from '../../assets/images/smiley.png';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="m-10 pt-20 font-second text-7xl tracking-wider">
      <h1 className="text-sky-600">Mia Garcia</h1>
      <p className="text-stone-950 m-5 flex items-center">
        Full Stack Web Developer
        <span style={{ display: 'inline-block' }}>
          <img src={smiley} alt="smiley" className="w-20 px-3 animate-bounce" />
        </span>
      </p>
      <div className="flex p-4">
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
