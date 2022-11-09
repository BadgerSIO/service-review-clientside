import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const ServicesSec = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/lastServices`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [user?.email]);
  return (
    <div className="py-20 container border-b border-b-borderTheme">
      <h1 className="text-5xl font-titles">Our Service area includes</h1>
    </div>
  );
};

export default ServicesSec;
