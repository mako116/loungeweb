import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user exists in localStorage (replace 'user' with your key)
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login", { replace: true }); // Redirect to login if no user
    }
  }, [navigate]);

  // Render children only if user exists
  const user = localStorage.getItem("user");
  if (!user) {
    return null; // Optionally, render a spinner here
  }

  return <>{children}</>;
}

export default ProtectedRoute;
