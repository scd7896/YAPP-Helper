import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import {
  mailSendResultSet,
  getMailTemplatesListFetch,
  setUserDataByFormRequest,
  initDesireAction,
} from "actions/desire";
import { RootStore, SendUserResult } from "@types";

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

  const initDesire = useCallback(() => {
    dispatch(initDesireAction());
  }, [dispatch]);

  return {
    desireState,
    mailResultSetData,
    mailTemplatesListFetch,
    setUserData,
    initDesire,
  };
};

export default useDesire;
