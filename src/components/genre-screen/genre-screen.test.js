import React from "react";
import renderer from "react-test-renderer";
import {GenreScreen} from "./genre-screen";
import {genreQuestion} from "../../mocks/questions";

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      focus() {},
    };
  }
  return null;
}

it(`Genre Screen correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <GenreScreen
          question={genreQuestion}
          onAnswer={jest.fn()}
        />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
