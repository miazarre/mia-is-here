import Stack from './Stack';
import Projects from './Projects';
import Resume from './Resume';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Stack />
        <Projects />
        <Resume />
      </div>
    </>
  );
};

export default Home;
