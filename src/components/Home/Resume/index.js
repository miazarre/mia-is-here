import CV_Mia_Garcia from '../../../assets/documents/miagarcia.pdf';

import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="mt-10 font-main text-4xl tracking-widest text-stone-950 dark:text-stone-200 hover:animate-bounce">
          Resume
        </h2>
        <p className="pt-10 font-second text-stone-950 dark:text-stone-200">
          If you want to get to know me better, download me !
        </p>
        <div className="mt-10">
          <a
            href={CV_Mia_Garcia}
            download="MiaGarcia.pdf"
            className="icon-container group"
          >
            <FaFileDownload size={80} className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
