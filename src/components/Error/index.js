import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

require('@lottiefiles/lottie-player');

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <Link to="/" className="mt-40">
          <h2 className="text-center font-main text-7xl sm:text-7xl font-extrabold uppercase text-sky-200 hover:text-yellow-300 tracking-widest">
            There's nothing to see here!
          </h2>
        </Link>
        <div className="mt-10">
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_s6eQAuqcje.json"
          ></lottie-player>
        </div>
      </div>
    </>
  );
};

export default Error;
