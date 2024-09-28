// src/PricingTable.js
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './card';
import Button from './button';
import './PricingTable.css';

const pricingData = [
  {  
    title: "Single User",
    icon: "👤",
    price: "$149",
    features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
  },
  {
    title: "Double User",
    icon: "👥",
    price: "$149",
    features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
  },
  {
    title: "Triple User",
    icon: "👨‍👩‍👧",
    price: "$149",
    features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
  },
];

const PricingTable = () => {
  return (
    <div className="container">
      <div className="grid">
        {pricingData.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="icon">{plan.icon}</div>
              <CardTitle>{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="price">{plan.price}</p>
              <ul className="features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Start Trial</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;