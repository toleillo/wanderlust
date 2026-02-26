import { useMemo } from "react";
import { getABVariant } from "@config";

export const useABVariant = () => {
  return useMemo(getABVariant, []);
};
