import { useState } from "react";

export const useAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(prev => !prev)
  }

  return {
    isAuthenticated,
    handleAuthenticated,
  }
}