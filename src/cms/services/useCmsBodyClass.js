import { useEffect } from 'react';

export default function useCmsBodyClass() {
  useEffect(() => {
    document.body.classList.add('cms-admin');

    return () => {
      document.body.classList.remove('cms-admin');
    };
  }, []);
}
