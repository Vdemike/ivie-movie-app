import PlanCard from "./PlanCard";
export default function Pricing() {
  return (
    <div className="flex flex-col items-center bg-amber-100 p-4">
      <div className="mb-2 mt-12 text-center">
        <h1 className="mb-4 text-7xl font-black text-black">Pricing</h1>
        <p className="text-lg text-black">Choose one</p>
      </div>
      <div id="pricing-cards" className="flex flex-col gap-8 p-10 xl:flex-row">
        <PlanCard
          color="#c8a2c8"
          name="Basic"
          description="You are never better served than by yourself"
          features={["1 User", "2 projects", "5 GB Storage"]}
          btnText="Go"
        />
        <PlanCard
          color="#fb4d46"
          name="Family"
          description="Here we make the family enjoy"
          features={["1 User", "2 projects", "5 GB Storage"]}
          btnText="Go"
        />
        <PlanCard
          color="#adb982"
          name="Generous"
          description="We treat all our friends with this offer"
          features={["1 User", "2 projects", "5 GB Storage"]}
          btnText="Go"
        />
      </div>
    </div>
  );
}
