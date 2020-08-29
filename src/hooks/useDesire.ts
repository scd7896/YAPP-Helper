import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { mailSendResultSet } from "actions/desire";
const useDesire = () => {
  const dispatch = useDispatch();
  const desireState = useSelector<RootStore, RootStore["desire"]>((state) => state.desire);
  const mailResultSetData = useCallback((data: SendUserResult) => {
    dispatch(mailSendResultSet(data));
  }, []);
  return {
    desireState,
    mailResultSetData,
  };
};

export default useDesire;
