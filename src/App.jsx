
import AssetOverview from "./components/AssetOverview";
import InvestmentHighlights from "./components/InvestmentHighlights";
import Milestone from "./components/Milestone";
import TopView from "./components/Topview";

const App = () => {
  return (
    <div>
      <TopView/>
      <InvestmentHighlights />
      <AssetOverview/>
      <Milestone/>
    </div>
  )
}

export default App;
