import { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";

export function Success() {
  const { orderInfo } = useContext(AppContext);

  return <h1>{JSON.stringify(orderInfo)}</h1>;
}
