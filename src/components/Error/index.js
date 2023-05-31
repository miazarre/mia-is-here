import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Link to="/" className="mt-10">
          <h2 className="text-center pt-10 font-main text-7xl sm:text-7xl font-extrabold uppercase text-purple-400 hover:text-yellow-300 tracking-wider">
            There's nothing to see here!
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Error;
