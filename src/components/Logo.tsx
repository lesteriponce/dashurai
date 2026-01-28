import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="box-border caret-transparent block shrink-0 w-[72px]">
      <img
        src="/dashurLogo.png"
        alt="Dashur Logo"
        className="box-border caret-transparent w-full"
      />
    </Link>
  );
};
