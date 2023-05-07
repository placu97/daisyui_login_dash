import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
//TODO : notodo, così implementato al posto di quello che c'era prima

export const ProtectedRoute = ({ element: Element }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/accesso");
    }
  }, [loading, user]);

  return user ? <Element /> : null;
};