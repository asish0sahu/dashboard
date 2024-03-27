
import { FaCheck } from 'react-icons/fa';

function Milestone() {
  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-6">Milestone</h2>
      <div className="border-l-2 border-gray-200 absolute h-full left-3" />
      <ul className="list-none m-0 p-0">
        <li className="mb-4 ml-4">
          <div className="flex items-center mb-1">
            <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm">15th Dec, 2023</p>
          </div>
          <p className="ml-9 text-sm">Asset Identified</p>
        </li>
        <li className="mb-4 ml-4">
          <div className="flex items-center mb-1">
            <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm">18th Feb, 2024</p>
          </div>
          <p className="ml-9 text-sm">Opportunity Launched</p>
        </li>
        <li className="mb-4 ml-4">
          <div className="flex items-center mb-1">
            <div className="bg-red-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm">15th Apr, 2024</p>
          </div>
          <p className="ml-9 text-sm">Developer Work Completion & Interior Work Commencement</p>
        </li>
        <li className="mb-4 ml-4">
          <div className="flex items-center mb-1">
            <div className="bg-red-500 rounded-full h-6 w-6 flex items-center justify-center mr-3">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm">1st Jul, 2024</p>
          </div>
          <p className="ml-9 text-sm">Project Handover & Rent Commencement</p>
        </li>
      </ul>
    </div>
  );
}

export default Milestone;
