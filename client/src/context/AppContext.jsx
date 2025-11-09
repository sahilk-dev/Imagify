import { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCreditsData = useCallback(async () => {
    if (!token) return;

    try {
      // console.log("Loading credits data with token:", token);
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      // console.log("API Response:", data);

      if (data.success) {
        setCredit(data.credits);

        // FIX: The user data is inside data.message, not data.user
        const userData = data.user || data.message;
        setUser(userData);

        // console.log("User set to:", userData);
        // console.log("Credits set to:", data.credits);
      } else {
        // console.log("API returned success: false");
      }
    } catch (error) {
      console.error("Error loading credits:", error);
      toast.error(error.response?.data?.message || error.message);
    }
  }, [token, backendUrl]);

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    setCredit(0);
  };

  useEffect(() => {
    // console.log("Token changed:", token);
    if (token) {
      loadCreditsData();
    }
  }, [token, loadCreditsData]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
