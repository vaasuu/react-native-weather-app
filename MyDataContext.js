import React from "react";

const myDataContext = React.createContext({
  apikey: "",
  setApikey: () => {},
  city: "",
  setCity: () => {},
  units: "",
  setUnits: () => {},
});

export default myDataContext;
