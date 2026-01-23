import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';

export const DashuraiCTAButtons = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <li className="box-border caret-transparent gap-x-1 flex min-h-0 min-w-0 gap-y-1 ml-0 mt-6 md:min-h-[auto] md:min-w-[auto] md:ml-auto md:mt-0">
      <div
        className="items-center aspect-square bg-[oklch(0.9821_0_0)] box-border caret-transparent hidden justify-center min-h-0 min-w-0 w-12 rounded-[3.35544e+07px] md:flex md:min-h-[auto] md:min-w-[auto]"
      >
        <img
          src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent w-6"
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className="items-center aspect-square bg-[oklch(0.9821_0_0)] box-border caret-transparent flex justify-center min-h-0 min-w-0 w-12 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto] transition-colors duration-200 hover:bg-[oklch(0.95_0_0)]"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <svg
            className="w-6 h-6 text-[oklch(0.25_0.05_240)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-[oklch(0.25_0.05_240)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
      <div
        onClick={() => navigate('/contact')}
        className="items-center bg-[oklch(0.8346_0.0735_257.42)] box-border caret-transparent gap-x-3 flex shrink-0 justify-between leading-4 min-h-0 min-w-0 gap-y-3 w-full pl-5 pr-1 py-1 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto] md:w-fit cursor-pointer hover:bg-[oklch(0.75_0.07_257.42)] transition-colors duration-200"
      >
        <span className="box-border caret-transparent block min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          Contact
        </span>
        <span className="items-center aspect-square bg-[oklch(0.1489_0.0027_248.08)] box-border caret-transparent flex shrink-0 justify-center min-h-0 min-w-0 w-10 rounded-[3.35544e+07px] md:min-h-[auto] md:min-w-[auto]">
          <img
            src="https://c.animaapp.com/mkh4hbwu1IS6us/assets/icon-4.svg"
            alt="Icon"
            className="box-border caret-transparent w-4"
          />
        </span>
      </div>
    </li>
  );
};
