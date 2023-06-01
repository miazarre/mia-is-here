import CV_Mia_Garcia from '../../../assets/documents/miagarcia.pdf';

import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="mt-10 font-main text-4xl tracking-widest text-stone-950 hover:animate-bounce">
          Resume
        </h2>
        <div className="mt-20 mb-5 ml-10 pl-2 flex sm:justify-start md:items-center">
          <a
            href={CV_Mia_Garcia}
            download="MiaGarcia.pdf"
            className="icon-container group"
          >
            <FaFileDownload size={80} className="icon" />
          </a>
        </div>
        <p className="pt-10 font-second">
          If you want to get to know me better, download me!
        </p>
      </div>
    </>
  );
};

export default Resume;
