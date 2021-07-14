//Ducks 패턴 - 액션타입, 액션생성함수, 리듀서를 모두 한 곳에 작성

//액션 타입
// const를 붙여 줌으로써 나중에 string으로 추론되지 않고 실제 문자열으로 추론되게 함
const SETINFO = "jobList/SETINFO" as const;

//액션생성함수

export const setInfo = (jobInfo: {}) => ({
  type: SETINFO,
  payload: {
    jobInfo,
  },
});

// 모든 액션 객체에 대한 타입
// ReturnType<typeof> 는 특정 함수의 반환값을 추론해줍니다.
type InfoAction = ReturnType<typeof setInfo>;

// 리덕스 모듈에서 관리 할 상태의 타입
type InfoState = {
  jobList: {};
};

const initialState: InfoState = {
  jobList: {},
};

//리듀서

function jobList(
  state: InfoState = initialState,
  action: InfoAction
): InfoState {
  switch (action.type) {
    case SETINFO:
      return { jobList: action.payload.jobInfo };
    default:
      return state;
  }
}

export default jobList;
