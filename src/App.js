import { useState } from "react";
import DetailForm from "./components/DetailForm";
import Card from "./components/Card";

function App() {
  const [toggle, setToggle] = useState(false);
  const [allValues, setAllValues] = useState({
    initialAvgBuyPrice: 0, //2.456883
    initialQuantity: 0, //264.5628
    initialInvestedAmount: 0, //650
    ltpOfAsset: 0, //1.285257
    toInvestAmount: 0, //5000
  });
  // to calculate values;
  const [calDetails, setCalDetails] = useState({
    currentInvestQuantity: 0,
    newAvgBuyPrice: 0,
    percentProfitOrLoss: 0,
  });

  return (
    <div className="App">
      <DetailForm
        allValues={allValues}
        setAllValues={setAllValues}
        calDetails={calDetails}
        setCalDetails={setCalDetails}
        setToggle={setToggle}
      />
      {toggle ? <Card data={calDetails} /> : null}
    </div>
  );
}

export default App;
