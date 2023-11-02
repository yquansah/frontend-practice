import Package from "./components/Package";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function App() {
  return (
    <div className="h-full w-full bg-midnight text-center pb-12">
      <div className="bg-burgundy rounded-b-lg text-white md:h-24 md:w-96 md:pb-0 pb-4 flex flex-col mx-auto">
        <div className="text-white mt-4">Your current plan:</div>
        <div className="text-white font-bold">Starter Trial - 500 MAUs</div>
      </div>
      <div className="text-white text-3xl md:mt-24 mt-16 font-bold">Choose a Plan</div>
      <div className="flex justify-center mt-12">
        <div className="text-white text-sm">Billed monthly</div>
        <div>Toggle Button</div>
        <div className="text-white text-sm">Billed Annually</div>
      </div>
      <div className="md:flex md:flex-row flex-col items-center justify-center md:space-x-4 md:space-y-0 space-y-8 mt-12">
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
          <div className="mt-28">
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
          <div className="mt-8">
            <Select
              className="w-56 border-2 border-burgundy"
              defaultValue="2500 MAUs"
            >
              <MenuItem>2500 MAUs</MenuItem>
            </Select>
            <div className="text-white text-left ml-12 mt-8 text-sm">
              <ul className="marker:text-burgundy list-disc">
                <li>500 MAUs</li>
                <li className="mt-2">All starter features plus</li>
                <li className="mt-2">Unlimited projects</li>
                <li className="mt-2">Unlimited fully customizable features</li>
                <li className="mt-2">A dedicated Customer Success Manager</li>
              </ul>
            </div>
            <div className="mt-16">
              <button className="bg-burgundy text-white px-12 py-2">
                Choose Plan
              </button>
            </div>
          </div>
        </Package>
        <Package>
          <div className="text-white mt-4 text-xl">Enterprise</div>
          <div className="text-white mt-4 text-3xl font-extrabold">Let's Talk!</div>
          <div className="text-white text-left ml-12 mt-36 text-sm">
            <ul className="marker:text-burgundy list-disc">
              <li className="mt-2">All pro features</li>
              <li className="mt-2">Unlimited MAUs</li>
              <li className="mt-2">Dedicated environment</li>
              <li className="mt-2">Enterprise account administration</li>
              <li className="mt-2">Premium support and services</li>
            </ul>
          </div>
          <div className="mt-16">
            <button className="bg-transparent text-white border-2 border-burgundy px-12 py-2">
              Contact Us
            </button>
          </div>
        </Package>
      </div>
    </div>
  );
}

export default App;
