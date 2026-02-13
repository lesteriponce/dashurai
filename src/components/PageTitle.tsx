import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const getPageTitle = (pathname: string): string => {
  const titleMap: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/capabilities': 'Capabilities',
    '/markets': 'Markets',
    '/careers': 'Careers',
    '/contact': 'Contact',
  };
  
  return titleMap[pathname] || 'Dashurai AI';
};

export const PageTitle = () => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  
  return (
    <Helmet>
      <title>{pageTitle} - Dashurai AI</title>
    </Helmet>
  );
};
