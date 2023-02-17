export default function Chiffres() {
  return (
    <div className="flex flex-col items-center bg-purple-100 p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-black font-title">
          Our stats
        </h1>
        <p className="text-lg text-black">
          let the numbers speak for themselves
        </p>
      </div>
      <div
        id="pricing-cards"
        className="flex flex-col gap-8 m:flex-row m-8 xl:flex-row border-2 border-black rounded-xl"
      >
        <div className="flex flex-col rounded-3xl p-8">
          <h1 className="mb-4 text-7xl font-black text-black font-title text-center">
            20
          </h1>
          <p className="text-lg text-black text-center">Accounts</p>
        </div>
        <div className="flex  flex-col rounded-3xl p-8">
          <h1 className="mb-4 text-7xl font-black text-black font-title text-center">
            2000
          </h1>
          <p className="text-lg text-black text-center">Movies</p>
        </div>
        <div className="flex  flex-col rounded-3xl p-8">
          <h1 className="mb-4 text-7xl font-black text-black font-title text-center">
            20
          </h1>
          <p className="text-lg text-black text-center">Categories</p>
        </div>
      </div>
    </div>
  );
}