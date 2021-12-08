function Dashboard() {
  return (
    <div className="flex flex-grow items-center justify-center text-white">
      <div className="grid-cols-4 grid gap-1.5 bg-yellow-400 p-20 h-full w-screen">
        <div className="bg-black flex  items-center justify-center rounded-xl  flex-col space-y-4">
          <div className=" flex flex-col items-center space-y-6 ">
            <h1 className="font-bold">Account Info:</h1>
            <h2 className="font-semibold">PLACE NAME HERE</h2>
            <h3 className="font-semibold">PLACE GAMERTAG HERE</h3>
          </div>
        </div>
        <div className="bg-black flex items-center justify-center rounded-xl col-span-3">
          <h1>PLACE MOST RECENT ACHIEVEMENTS HERE</h1>
        </div>

        <div className="bg-black flex items-center justify-center rounded-xl col-span-3">
          <h1>FIND OTHER DATA TO PULL FOR THIS BLOCK</h1>
        </div>
        <div className="bg-black flex items-center justify-center rounded-xl">
          <h1>PLACE FRIENDS LIST HERE</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
