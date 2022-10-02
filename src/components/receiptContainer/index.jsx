import { useContext, useEffect, useState } from "react";
import { ReceiptContext } from "../../Providers/receipt";
import { Container } from "./styles";

import ReactLoading from "react-loading";
const ReceiptContainer = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const {
    tomorrow,
    fifteenDays,
    thirtyDays,
    ninetyDays,
    loading,
    requestError,
    calculateAnticipation,
  } = useContext(ReceiptContext);
  useEffect(() => {
    if (
      tomorrow !== 0 ||
      fifteenDays !== 0 ||
      thirtyDays !== 0 ||
      ninetyDays !== 0
    ) {
      setIsEmpty(false);
    }
  }, [tomorrow, fifteenDays, thirtyDays, ninetyDays]);
  const tryAgainRequest = () => {
    calculateAnticipation();
  };
  return (
    <Container>
      {loading ? (
        <div className="loadingLogo">
          <ReactLoading
            type={"spin"}
            color={"#0d6efd"}
            height={80}
            width={80}
          />
        </div>
      ) : requestError ? (
        <div className="error">
          <p>Ops algo deu errado!</p>
          <button onClick={() => tryAgainRequest()}>Tente novamente</button>
        </div>
      ) : isEmpty ? (
        <h1 className="emptyText">
          Preencha o formulário e calcule os recebimentos da sua antecipação
        </h1>
      ) : (
        <ul>
          <h2>VOCÊ RECEBERÁ:</h2>

          {tomorrow > 0 ? (
            <li>
              Amanhã: <span className="currency">R${tomorrow},00</span>
            </li>
          ) : (
            <></>
          )}
          {fifteenDays > 0 ? (
            <li>
              Em 15 dias: <span className="currency">R${fifteenDays},00</span>
            </li>
          ) : (
            <></>
          )}
          {thirtyDays > 0 ? (
            <li>
              Em 30 dias: <span className="currency">R${thirtyDays},00</span>
            </li>
          ) : (
            <></>
          )}
          {ninetyDays > 0 ? (
            <li>
              Em 90 dias: <span className="currency">R${ninetyDays},00</span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      )}
    </Container>
  );
};

export default ReceiptContainer;
