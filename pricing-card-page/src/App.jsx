import Package from "./components/Package";

function App() {
  return (
    <div className="h-full w-full bg-midnight text-center pb-12">
      <div className="bg-burgundy rounded-b-lg text-white h-24 w-96 flex flex-col mx-auto">
        <div className="text-white mt-4">Your current plan:</div>
        <div className="text-white font-bold">Starter Trial - 500 MAUs</div>
      </div>
      <div className="text-white text-3xl mt-24 font-bold">Choose a Plan</div>
      <div className="flex justify-center mt-12">
        <div className="text-white text-sm">Billed monthly</div>
        <div>Toggle Button</div>
        <div className="text-white text-sm">Billed Annually</div>
      </div>
      <div className="flex justify-center space-x-4 mt-12">
        <Package>
          <div className="text-white mt-4 text-xl">Starter</div>
          <div className="text-white text-5xl font-bold mt-4">$19</div>
          <div className="text-white text-left ml-12 mt-12 text-sm">
            <ul className="marker:text-burgundy list-disc">
              <li>500 MAUs</li>
              <li className="mt-2">3 projects</li>
              <li className="mt-2">Unlimited guides</li>
              <li className="mt-2">Unlimited flows</li>
              <li className="mt-2">Unlimited branded themes</li>
              <li className="mt-2">Email support</li>
            </ul>
          </div>
          <div className="mt-8">
            <button className="bg-transparent text-white border-2 border-burgundy px-12 py-2">
              Choose Plan
            </button>
          </div>
        </Package>
        <Package>
          <div className="text-white mt-4 text-xl">Pro</div>
          <div className="text-white text-5xl font-bold mt-4">
            $99<span className="text-lg">/month</span>
          </div>
        </Package>
        <Package></Package>
      </div>
    </div>
  );
}

export default App;
