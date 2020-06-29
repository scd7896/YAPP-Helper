import { MailActionType } from '../action/mail';
import {
  SET_MAIL_TEXT,
  SET_MAIL_FORM,
  SET_MAIL_SELECTINDEX,
  SET_MAIL_TITLE,
  SET_MAIL_HEADIMAGE,
  TOGGLE_MAIL_HEADIMAGE_EDIT_MODE,
  PUT_MAIL_FORM_SUCCESS,
  PUT_MAIL_FORM_FAILURE,
} from '../action/actionTypes';

const initialState: MailInputState = {
  id: -1,
  text: '',
  title: '',
  type: '',
  headImageURL: '',
  subImageURL: '',
  headImage: null,
  headImageEditMode: false,
  subImage: null,
  selectIndex: 0,
  pass: null,
};
const mail = (
  state: MailInputState = initialState,
  action: MailActionType
): MailInputState => {
  switch (action.type) {
    case SET_MAIL_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_MAIL_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    // 이미지를 넣으면 바로 보임
    case SET_MAIL_HEADIMAGE:
      const headURL = URL.createObjectURL(action.payload);
      return {
        ...state,
        headImage: action.payload,
        headImageURL: headURL,
      };
    case TOGGLE_MAIL_HEADIMAGE_EDIT_MODE:
      let headImageEditMode;
      if (state.headImageEditMode) {
        headImageEditMode = false;
      } else {
        headImageEditMode = true;
      }
      return {
        ...state,
        headImageEditMode: headImageEditMode,
      };
    case SET_MAIL_FORM:
      return {
        ...state,
        ...action.payload,
      };
    case SET_MAIL_SELECTINDEX:
      return {
        ...state,
        selectIndex: action.payload,
      };
    case PUT_MAIL_FORM_SUCCESS:
      alert('메일 변경에 성공했습니다');
      return {
        ...state,
      };
    case PUT_MAIL_FORM_FAILURE:
      alert('메일 변경에 실패했습니다');
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default mail;
