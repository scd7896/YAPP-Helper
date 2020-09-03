import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { setMailForm, setMailSelectIndex } from "actions/mail";

const useMailform = () => {
  const dispatch = useDispatch();
  const mailformState = useSelector<RootStore, RootStore["mail"]>(({ mail }) => mail);

  const setSelectMailForm = useCallback(
    (mailform: MailState) => {
      dispatch(setMailForm(mailform));
    },
    [dispatch, setMailForm]
  );

  const setMailFormIndex = useCallback(
    (index: number) => {
      dispatch(setMailSelectIndex(index));
    },
    [dispatch, setMailSelectIndex]
  );

  return {
    mailformState,
    setSelectMailForm,
    setMailFormIndex,
  };
};

export default useMailform;
