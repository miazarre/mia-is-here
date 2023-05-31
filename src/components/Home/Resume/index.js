import CV_Mia_Garcia from '../../../assets/documents/miagarcia.pdf';

import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="m-10 font-main text-4xl tracking-widest text-stone-950 hover:animate-bounce">
          Resume
        </h2>
        <div className="flex sm:justify-start md:items-center p-4">
          <a
            href={CV_Mia_Garcia}
            download="MiaGarcia.pdf"
            className="icon-container group"
          >
            <FaFileDownload size={80} className="icon" />
          </a>
        </div>
        <p className="font-bold">
          If you want to get to know me better, download me!
        </p>
      </div>
    </>
  );
};

export default Resume;
