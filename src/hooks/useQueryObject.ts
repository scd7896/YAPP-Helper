import { useLocation as useLocationDI } from "react-router-dom";
import * as qs from "qs";

export default function useQueryObject({ useLocation = useLocationDI }) {
  const { search } = useLocation();

  return {
    query: qs.parse(search, { ignoreQueryPrefix: true }),
  };
}
