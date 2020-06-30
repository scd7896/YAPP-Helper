import {
  SET_MAIL_TEXT,
  SET_MAIL_FORM,
  SET_MAIL_TITLE,
  PUT_MAIL_FORM_REQUEST,
  PUT_MAIL_FORM_SUCCESS,
  SET_MAIL_SELECTINDEX,
  SET_MAIL_HEADIMAGE,
  SET_MAIL_HEADIMAGE_URL,
  TOGGLE_MAIL_HEADIMAGE_EDIT_MODE,
  TOGGLE_MAIL_SUBIMAGE_EDIT_MODE,
  SET_MAIL_SUBIMAGE,
  SET_MAIL_SUBIMAGE_URL,
  SET_ZIP_FILE,
  PUT_MAIL_FORM_FAILURE,
} from './actionTypes';

export const setMailTextValue = (payload: string) => {
  return {
    type: SET_MAIL_TEXT,
    payload,
  };
};

export const setMailForm = (payload: MailInputState) => {
  return {
    type: SET_MAIL_FORM,
    payload,
  };
};

export const setMailTitle = (payload: string) => {
  return {
    type: SET_MAIL_TITLE,
    payload,
  };
};

export const putMailFormRequest = () => {
  return {
    type: PUT_MAIL_FORM_REQUEST,
  };
};

export const putMailFormSuccess = () => {
  return {
    type: PUT_MAIL_FORM_SUCCESS,
  };
};

export const putMailFormFaiure = () => {
  return {
    type: PUT_MAIL_FORM_FAILURE,
  };
};

export const setMailSelectIndex = (payload: number) => {
  return {
    type: SET_MAIL_SELECTINDEX,
    payload,
  };
};

export const setMailHeadImage = (payload: File) => {
  return {
    type: SET_MAIL_HEADIMAGE,
    payload,
  };
};

export const setMailHeadImageURL = (payload: string) => {
  return {
    type: SET_MAIL_HEADIMAGE_URL,
    payload,
  };
};

export const setMailSubImage = (payload: File) => {
  return {
    type: SET_MAIL_SUBIMAGE,
    payload,
  };
};

export const setMailSubImageURL = (payload: string) => {
  return {
    type: SET_MAIL_SUBIMAGE_URL,
    payload,
  };
};

export const setZipFile = (payload: File) => {
  return {
    type: SET_ZIP_FILE,
    payload,
  };
};

export const toggleMailHeadImageEditMode = () => {
  return {
    type: TOGGLE_MAIL_HEADIMAGE_EDIT_MODE,
  };
};

export const toggleMailSubImageEditMode = () => {
  return {
    type: TOGGLE_MAIL_SUBIMAGE_EDIT_MODE,
  };
};

export type MailActionType =
  | ReturnType<typeof setMailTextValue>
  | ReturnType<typeof setMailForm>
  | ReturnType<typeof setMailTitle>
  | ReturnType<typeof putMailFormRequest>
  | ReturnType<typeof putMailFormSuccess>
  | ReturnType<typeof putMailFormFaiure>
  | ReturnType<typeof setMailSelectIndex>
  | ReturnType<typeof setMailHeadImage>
  | ReturnType<typeof setMailHeadImageURL>
  | ReturnType<typeof setMailSubImage>
  | ReturnType<typeof setMailSubImageURL>
  | ReturnType<typeof setZipFile>
  | ReturnType<typeof toggleMailHeadImageEditMode>
  | ReturnType<typeof toggleMailSubImageEditMode>
  | ReturnType<typeof setMailSubImage>;
