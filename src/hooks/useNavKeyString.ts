import { useCallback } from "react";
import { useRouteMatch } from "react-router-dom";
const useNavKeyString = () => {
  const { url } = useRouteMatch();
  const getIsSelected = useCallback(
    (keyString: string) => {
      try {
        const targetUrl = url.split("/")[1] as URLType;
        return targetUrl === keyString;
      } catch (err) {
        return false;
      }
    },
    [url]
  );
  return {
    getIsSelected,
  };
};

export default useNavKeyString;
