export default function PlanCard(props) {
  const {
    name,
    description,
    price,
    features,
    color,
    btnText = "start",
  } = props;
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
    >
      <h2 className="mb-5 text-xl font-medium">{name}</h2>
      <div className="mb-5 flex items-end text-6xl font-black">
        {price ? (
          <>
            <div>${price.toFixed(2)}</div>
          </>
        ) : (
          "Free"
        )}
      </div>
      <p className="md-5">{description}</p>
      <ul className="mb-10 flex flex-col gap-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex itens-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button>{btnText}</button>
    </div>
  );
}
