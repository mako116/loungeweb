// src/components/ProtectedRoute.jsx
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Spinner } from "@chakra-ui/react";


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const {userDetails, setUserDetails} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched user:", res.data);
        setUserDetails(res.data); // store user in AuthContext
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth error:", error);
        localStorage.removeItem("ACCESS_TOKEN");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <Spinner/>;

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
