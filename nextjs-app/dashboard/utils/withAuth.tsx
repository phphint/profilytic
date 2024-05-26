import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>; // Show a loading indicator while checking authentication
    }

    if (!isAuthenticated) {
      return null; // Return null if the user is not authenticated to avoid rendering the wrapped component
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
