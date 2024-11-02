import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return {
    isVisible,
    showModal,
    hideModal,
  };
};