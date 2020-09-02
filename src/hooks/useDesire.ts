import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { mailSendResultSet, getMailTemplatesListFetch, setUserDataByFormRequest } from "actions/desire";
const useDesire = () => {
  const dispatch = useDispatch();
  const desireState = useSelector<RootStore, RootStore["desire"]>((state) => state.desire);

  const mailResultSetData = useCallback(
    (data: SendUserResult) => {
      dispatch(mailSendResultSet(data));
    },
    [dispatch]
  );

  const mailTemplatesListFetch = useCallback(() => {
    dispatch(getMailTemplatesListFetch());
  }, [dispatch]);

  const setUserData = useCallback(() => {
    dispatch(setUserDataByFormRequest());
  }, [dispatch]);

  return {
    desireState,
    mailResultSetData,
    mailTemplatesListFetch,
    setUserData,
  };
};

export default useDesire;
