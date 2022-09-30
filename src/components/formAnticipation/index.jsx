import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ReceiptContext } from "../../Providers/receipt";
const schema = yup.object().shape({
  amount: yup
    .number()
    .min(1000, "O valor deve ser maior ou igual a 1000.")
    .max(100000000, "O valor deve ser menor ou igual a 100000000.")
    .typeError("O valor é obrigatório para o cálculo")
    .required("O valor é obrigatório para o cálculo"),
  installments: yup
    .number()
    .min(1, "Adicione apenas valores positivos")
    .typeError("O numero de parcelas é obrigatório para o cálculo")
    .required("O numero de parcelas é obrigatório para o cálculo")
    .max(12, "O número máximo deve ser de 12 parcelas"),
  mdr: yup
    .number()
    .min(1, "Adicione apenas valores positivos")
    .max(100, "Informe um percentual menor ou igual a 100%")
    .typeError("O mdr é obrigatório para o cálculo")
    .required("O mdr é obrigatório para o cálculo"),
  days: yup.array(),
});
const FormAnticipation = () => {
  const { calculateAnticipation, loading, setRequestData, requestError } =
    useContext(ReceiptContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const funcSubmit = (data) => {
    if (data.days.length === 0) {
      delete data.days;
    }
    setRequestData(data);

    calculateAnticipation(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(funcSubmit)}>
        <h1>Simule sua Antecipação</h1>
        <label>Informe o valor da venda *</label>
        <input type={"number"} {...register("amount")} />
        {errors.amount && (
          <span className="error">{errors.amount.message}</span>
        )}

        <label>Em quantas parcelas *</label>
        <input type={"number"} {...register("installments")} />

        <span>Máximo de 12 parcelas</span>
        {errors.installments && (
          <span className="error">{errors.installments.message}</span>
        )}
        <label>Informe o percentual de MDR *</label>
        <input type={"number"} {...register("mdr")} />
        {errors.mdr && <span className="error">{errors.mdr.message}</span>}
        <p>Dias de antecipação:</p>

        <div className="daysAnticipation">
          <label className="containerLabel">
            1 dia
            <input type="checkbox" value={1} {...register("days")} />
            <span className="checkmark"></span>
          </label>

          <label className="containerLabel">
            15 dias
            <input type="checkbox" value={15} {...register("days")} />
            <span className="checkmark"></span>
          </label>

          <label className="containerLabel">
            30 dias
            <input type="checkbox" value={30} {...register("days")} />
            <span className="checkmark"></span>
          </label>
          <label className="containerLabel">
            90 dias
            <input type="checkbox" value={90} {...register("days")} />
            <span className="checkmark"></span>
          </label>
        </div>
        {loading || requestError ? (
          <div className="dontBreakDiv"></div>
        ) : (
          <button type="submit">Calcular</button>
        )}
      </form>
    </Container>
  );
};

export default FormAnticipation;
