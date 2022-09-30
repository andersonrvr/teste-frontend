import FormAnticipation from "./components/formAnticipation";
import ReceiptContainer from "./components/receiptContainer";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <section className="Main">
        <FormAnticipation />
        <ReceiptContainer />
      </section>
    </div>
  );
}

export default App;
