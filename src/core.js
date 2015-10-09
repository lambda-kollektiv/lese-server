import {fromJS, Map, List} from "immutable";

const INIT_STATE = {
  "bookmarks": [],
  "users": [],
  "tags": []
}

export function addBookmark(state = fromJS(INIT_STATE), bookmark) {
  const newBookmark = List.of(Map(bookmark))
  return state.updateIn(["bookmarks"], old => old.concat(newBookmark))
}
