import React from "react";

const PricingCard = ({ title, price, features, buttonText }) => (
  <div className="bg-white shadow rounded-lg p-6 text-center mb-8">
    <h3 className="font-bold text-xl mb-4">{title}</h3>
    <div className="text-4xl font-bold mb-4">${price}</div>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      {buttonText}
    </button>
  </div>
);

const PricingComponent = () => {
  const pricingTiers = [
    {
      title: "Basic",
      price: "9",
      features: [
        "100 Practice Questions",
        "1 Full-Length Test",
        "30 Days Access",
        "Email Support",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: "29",
      features: [
        "500 Practice Questions",
        "5 Full-Length Tests",
        "90 Days Access",
        "Priority Email Support",
      ],
      buttonText: "Go Pro",
    },
    {
      title: "Premium",
      price: "49",
      features: [
        "1000 Practice Questions",
        "10 Full-Length Tests",
        "180 Days Access",
        "24/7 Priority Email Support",
      ],
      buttonText: "Go Premium",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-between align-center">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
