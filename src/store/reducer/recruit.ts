import { RecruitActionTypes } from "../action/recruit";
import {
  SET_RECRUIT_VALUE,
  RECRUIT_DATA_REQUEST,
  RECRUIT_DATA_FAILURE,
  RECRUIT_DATA_SUCCESS,
} from "../action/actionTypes";
import { RecruitState } from "@types";

export const initialState: RecruitState = {
  isLoaded: false,
  isRecruiting: true,
  lastDay: "",
  startDay: "",
  URL: "",
  generation: 0,
  isError: false,
};

const recruit = (state: RecruitState = initialState, action: RecruitActionTypes) => {
  switch (action.type) {
    case SET_RECRUIT_VALUE:
      return {
        ...state,
        ...action.payload,
      };
    case RECRUIT_DATA_REQUEST:
      return {
        ...initialState,
      };
    case RECRUIT_DATA_SUCCESS:
      return {
        isLoaded: true,
        isError: false,
        ...action.payload,
      };
    case RECRUIT_DATA_FAILURE:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return { ...state };
  }
};

export default recruit;
