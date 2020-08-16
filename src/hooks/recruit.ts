import { useDispatch, useSelector } from "react-redux";
import { recruitDataRequest, setRecruitValue } from "../store/action/recruit";
import { useCallback } from "react";

const useRecruit = () => {
  const dispatch = useDispatch();

  const { isLoaded, isError, isRecruiting, URL, generation, lastDay, startDay } = useSelector(
    (state: RootStore) => state.recruit
  );

  const dataRequest = useCallback(() => {
    dispatch(recruitDataRequest());
  }, [dispatch]);

  const setValue = useCallback(
    (payload: Object) => {
      dispatch(setRecruitValue(payload));
    },
    [dispatch]
  );

  return {
    isLoaded,
    isError,
    isRecruiting,
    URL,
    generation,
    lastDay,
    startDay,
    dataRequest,
    setValue,
  };
};

export default useRecruit;
