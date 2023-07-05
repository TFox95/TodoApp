import { useState } from 'react';
import reactLogo from '../Assets/react.svg';
import viteLogo from '../Assets/vite.svg';
import style from "../Styles/App.module.css";
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={style.root}>
      <div className={style["counter-section"]}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={style.logo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={style.logo} alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={style.card}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className={style["read-the-docs"]}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>

  )
};

export default Counter;