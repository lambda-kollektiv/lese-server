import {List, Map} from "immutable"
import {expect} from "chai"
import {addBookmark} from "../src/core"

const testBookmark = {
  "url": "livelycode.io",
  "title": "best team in the world",
  "comment": "we suck all",
  "id": 123,
}

const testBookmark2 = {
  "url": "asdlivelycode.io",
  "title": "best team in the world",
  "comment": "we suck all",
  "id": 123,
}

describe("application logic", () => {
  
  describe("addBookmark", () => {
    it("adds a new bookmark to the store", () => {
      const newBookmark = Map(testBookmark)
      const nextState = addBookmark(undefined, newBookmark)
      expect(nextState).to.equal(Map(
        {
          "bookmarks": List.of(Map(testBookmark)),
          "users": List(),
          "tags": List()
        }
      ))
    })
    it("converts new bookmarks to immutable data", () => {
      const newBookmark = testBookmark
      const nextState = addBookmark(undefined, newBookmark)
      expect(nextState).to.equal(Map(
        {
          "bookmarks": List.of(Map(testBookmark)),
          "users": List(),
          "tags": List()
        }
      ))
    })
    it("increases the boomkark count", () => {
      const oldState = Map({bookmarks: List.of(Map(testBookmark))})
      const newBookmark = testBookmark2
      const nextState = addBookmark(oldState, newBookmark)
      expect(nextState.get("bookmarks").size).to.equal(2)
    })

  })
})
