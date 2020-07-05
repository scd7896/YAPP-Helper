import { useHistory } from "react-router-dom";

const useHisotryRoute = () => {
  const hisotry = useHistory();
  const pushHistory = (path: string) => {
    hisotry.push(path);
  };

  return {
    pushHistory,
  };
};

export default useHisotryRoute;
