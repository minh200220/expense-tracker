import React from "react";

const random = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {random ? "Income " : "Expense "}
      for {random ? "$100 " : "$50 "}
      in Category {random ? "Business " : "House "}
      for {random ? "Monday " : "Friday "}
    </div>
  );
};

export default InfoCard;
