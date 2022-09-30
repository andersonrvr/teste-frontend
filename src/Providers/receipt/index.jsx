import axios from "axios";
import { createContext, useState } from "react";

export const ReceiptContext = createContext();

export const ReceiptProvider = ({ children }) => {
  const [tomorrow, setTomorrow] = useState(0);
  const [fifteenDays, setFifteenDays] = useState(0);
  const [thirtyDays, setThirtyDays] = useState(0);
  const [ninetyDays, setNinetyDays] = useState(0);
  const [loading, setLoading] = useState(false);
  const [requestData, setRequestData] = useState({});
  const [requestError, setRequestError] = useState(false);
  const calculateAnticipation = (data) => {
    setRequestError(false);
    setLoading(true);
    setTomorrow(0);
    setFifteenDays(0);
    setThirtyDays(0);
    setNinetyDays(0);
    if (!data) {
      data = requestData;
    }

    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((res) => {
        if (res.data[1]) {
          setTomorrow(res.data[1]);
        }
        if (res.data[15]) {
          setFifteenDays(res.data[15]);
        }
        if (res.data[30]) {
          setThirtyDays(res.data[30]);
        }
        if (res.data[1]) {
          setNinetyDays(res.data[90]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setRequestError(true);
      });
  };
  return (
    <ReceiptContext.Provider
      value={{
        tomorrow,
        fifteenDays,
        thirtyDays,
        ninetyDays,
        loading,
        setLoading,
        calculateAnticipation,
        requestError,
        setRequestData,
      }}
    >
      {children}
    </ReceiptContext.Provider>
  );
};
