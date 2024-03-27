

import { FaPiggyBank, FaPercent, FaBullseye, FaGift } from 'react-icons/fa';

function InvestmentHighlights() {
  return (
    <div className="bg-red-100 p-8">
      <h2 className="text-2xl font-semibold mb-6">Investment Highlights</h2>
      <div className="flex justify-between mb-8">
        <div className="flex flex-col items-center">
          <FaPiggyBank className="text-green-500 mb-2" />
          <p className="text-xl font-semibold">₹10.80L</p>
          <p>Per Share</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPercent className="text-blue-500 mb-2" />
          <p className="text-xl font-semibold">6% p.a</p>
          <p>Entry Year Rental Yield</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBullseye className="text-red-500 mb-2" />
          <p className="text-xl font-semibold">14.32%*</p>
          <p>Targeted IRR</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGift className="text-gray-500 mb-2" />
          <p className="text-xl font-semibold">Inaara Stay Credits**</p>
          <p>worth ₹18,000 Per Year</p>
        </div>
      </div>
      <p className="text-sm mb-8">* Based on assumption, actual may vary.. ** To be used at Inaara within an year.</p>
    </div>
  );
}

export default InvestmentHighlights;
