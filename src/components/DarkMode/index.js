import { useEffect, useState } from 'react';

function DarkMode() {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    darkToggle
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkToggle]);

  return (
    <div>
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
    </div>
  );
}
export default DarkMode;
