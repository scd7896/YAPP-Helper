import { DesireACtionTypes } from "../action/desire";
import {
  SET_EXCEL_SUCCESS,
  SET_EXCEL_REQUEST,
  SET_EXCEL_FAILURE,
  USERLIST_SET_BY_FORMDATA_REQUEST,
  USERLIST_SET_BY_FORMDATA_RESULT,
  MAILTEMPLATES_FETCH_REQUEST,
  MAILTEMPLATES_FETCH_SUCCESS,
  MAILTEMPLATES_ALLFETCH_REQUEST,
  MAILTEMPLATES_FETCH_FAILURE,
  SENDMAIL_USER_RESULT,
} from "../action/actionTypes";

const initialState: DesireState = {
  keys: [],
  users: [],
  allList: [],
  isError: false,
  mailTemplates: null,
  filename: null,
};

const desire = (state: DesireState = initialState, action: DesireACtionTypes): DesireState => {
  const copyState: DesireState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_EXCEL_REQUEST:
      return initialState;

    case SET_EXCEL_SUCCESS:
      const [keys, ...users] = action.payload;
      copyState.keys = keys;
      copyState.users = users;
      copyState.allList = [];
      copyState.filename = action.name;
      return {
        ...state,
        ...copyState,
      };

    case SET_EXCEL_FAILURE:
      return {
        ...initialState,
        isError: true,
      };

    case USERLIST_SET_BY_FORMDATA_REQUEST:
      copyState.allList = [];
      return {
        ...state,
        ...copyState,
      };

    case USERLIST_SET_BY_FORMDATA_RESULT:
      copyState.allList = action.payload;
      return {
        ...state,
        ...copyState,
      };
    case MAILTEMPLATES_ALLFETCH_REQUEST:
    case MAILTEMPLATES_FETCH_REQUEST:
      copyState.mailTemplates = null;
      return {
        ...state,
        ...copyState,
      };
    case MAILTEMPLATES_FETCH_SUCCESS:
      copyState.mailTemplates = action.payload;
      return {
        ...state,
        ...copyState,
      };

    case MAILTEMPLATES_FETCH_FAILURE:
      alert("메일 폼 가져오기 실패");
      return {
        ...state,
        mailTemplates: null,
      };

    case SENDMAIL_USER_RESULT:
      const { user, isError } = action.payload;
      const targetIndex = copyState.allList.findIndex((userData) => user === userData.email);
      copyState.allList[targetIndex].isError = isError;
      return copyState;
    default:
      return { ...state };
  }
};

export default desire;
