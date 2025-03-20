import TransactionCard from "@/components/transaction-card"

export default function Home() {
  return (
    <main className="flex justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col space-y-6 w-full max-w-[350px] mx-5 my-24">

        <h1 className="text-xl font-medium">Expense Tracker</h1>

        {/* Stats */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col -space-y-1">
            <h2 className="uppercase text-sm font-medium">Your Balance</h2>
            <h3 className="text-3xl font-medium">₹450.00</h3>
          </div>

          <div className="flex justify-between bg-white p-4 shadow rounded-sm divide-x divide-gray-300">
            <div className="flex flex-col -space-y-0.5 text-center w-full">
              <h5 className="font-medium">INCOME</h5>
              <h5 className="font-medium text-green-600">500.00</h5>
            </div>

            <div className="flex flex-col -space-y-0.5 text-center w-full">
              <h5 className="font-medium">EXPENSE</h5>
              <h5 className="font-medium text-red-800">50.00</h5>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <h3 className="font-medium">History</h3>
            <hr className="border-gray-400" />
          </div>

          <div className="flex flex-col space-y-2">
            <TransactionCard label="Book" amount={-50} />
            <TransactionCard label="Payment" amount={500} />
          </div>
        </div>

        {/* Add new transaction */}
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <h3 className="font-medium">Add new transaction</h3>
            <hr className="border-gray-400" />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">Text</p>
              <input type="text" className="w-full bg-white border-1 border-gray-300 px-2 py-1.5 text-sm rounded-sm font-medium" placeholder="Enter text..." />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium">
                Amount<br />
                (negative - expense, positive - income)
              </p>
              <input type="text" className="w-full bg-white border-1 border-gray-300 px-2 py-1.5 text-sm rounded-sm font-medium" placeholder="Enter amount..." />
            </div>

            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 cursor-pointer w-full text-white font-medium text-sm py-1.5 px-1 rounded-sm shadow-sm">Add transaction</button>
          </div>
        </div>


      </div>
    </main>
  );
}
