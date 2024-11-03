import { useEffect } from "react"
import { useAuthenticated } from "./useAuthenticated";
import { useNavigate } from 'react-router-dom';

//  TODO ошибку линтера убрать
export const useAuth = () => {
  const navigate = useNavigate();

  const { handleAuthenticated } = useAuthenticated();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      handleAuthenticated();
      navigate('/');
    } else {
      navigate('/auth');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
}