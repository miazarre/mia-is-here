const Stack = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="m-10 font-main text-4xl tracking-widest text-stone-950 dark:text-stone-200 hover:animate-bounce">
          Stack
        </h2>
        <div className="font-second text-stone-950 dark:text-stone-200">
          <div className="ml-10 grid grid-cols-1 md:grid-cols-4">
            <h3 className="font-bold text-l">Languages</h3>
            <ul className="md:col-span-1 space-y-1">
              <li>
                <h4 className="mb-2 font-bold">JavaScript</h4>
                <p className="text-s">The first, and highly versatile </p>
              </li>
              <li>
                <h4 className="mb-2 font-bold">& more soon</h4>
              </li>
            </ul>
          </div>
          <div className="mt-5 ml-10 grid grid-cols-1 md:grid-cols-4 font-second text-stone-950 dark:text-stone-200">
            <h3 className="font-bold text-l">Libraries & Frameworks</h3>
            <ul className="md:col-span-1 space-y-1 font-bold mb-2">
              <li>
                <h4>React</h4>
              </li>
              <li>
                <h4>Node.js & Express</h4>
              </li>
              <li>
                <h4>tailwindcss</h4>
              </li>
              <li>
                <h4>Sass</h4>
              </li>
            </ul>
          </div>
          <div className="mt-5 ml-10 grid grid-cols-1 md:grid-cols-4 font-second text-stone-950 dark:text-stone-200">
            <h3 className="font-bold text-l">Misc</h3>
            <ul className="md:col-span-1 space-y-1 font-bold mb-2">
              <li>
                <h4>VSCode</h4>
              </li>
              <li>
                <h4>PostgreSQL</h4>
              </li>
              <li>
                <h4>SQL</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
