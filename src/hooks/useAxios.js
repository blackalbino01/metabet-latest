import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
      if (result.config.method == "post") {
        console.log();
        toast.success("Updated", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      setError(error);
      toast.error(`${error}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setloading(false);
    }
  };

  return {
    response,
    error,
    loading,
    fetchData,
  };
};
