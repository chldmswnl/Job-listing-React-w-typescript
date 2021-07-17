const SETKEYWORD = "keywordList/SETKEYWORD" as const;

export const setKeyword = (keyword: any) => ({
  type: SETKEYWORD,
  payload: keyword,
});

type keywordAction = ReturnType<typeof setKeyword>;

type KeywordState = {
  keywordList: any;
};

const initialState: KeywordState = {
  keywordList: [],
};

function keywordList(
  state: KeywordState = initialState,
  action: keywordAction
): KeywordState {
  switch (action.type) {
    case SETKEYWORD:
      return { keywordList: action.payload };
    default:
      return state;
  }
}

export default keywordList;
