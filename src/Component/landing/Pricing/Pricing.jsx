import PlanCard from "./PlanCard";
export default function Pricing() {
  return (
    <div className="flex flex-col items-center bg-amber-100 p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-black font-title">
          Pricing
        </h1>
        <p className="text-lg text-black">Everything at a price</p>
      </div>
      <div id="pricing-cards" className="flex flex-col gap-8 xl:flex-row mb-10">
        <PlanCard
          color="#c8a2c8"
          name="Basic"
          price="7,99€"
          description="You are never better served than by yourself"
          features={[
            "Access to standard movie library",
            "Standard video quality",
            "Access on one device at a time",
            "No ads",
          ]}
        />
        <PlanCard
          color="#81c6ee"
          name="Family"
          price="11,99€"
          description="With this, you will be able to make the family enjoy"
          features={[
            "Access to full movie library",
            "HD video quality",
            "Access on up to four devices simultaneously",
            "No ads",
          ]}
        />
        <PlanCard
          color="#adb982"
          name="Generous"
          price="15,99€"
          description="We treat all our friends with this offer"
          features={[
            "Access to full movie library",
            "4K video quality",
            "Access on up to six devices simultaneously",
            "No ads",
          ]}
        />
      </div>
    </div>
  );
}
