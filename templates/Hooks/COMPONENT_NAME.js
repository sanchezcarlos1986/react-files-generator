import { useState, useEffect } from "react";

/**
 * Represents a Hook
 * @return {null} Returns null
 *
 */
export const COMPONENT_NAME = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
  }, []);

  return { data };
};

export default COMPONENT_NAME;
