import React from "react";
import renderer from "react-test-renderer";
import {ArtistScreen} from "./artist-screen";
import {artistQuestion} from "../../mocks/questions";

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      focus() {},
    };
  }
  return null;
}

it(`Artist Screen correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <ArtistScreen
          question={artistQuestion}
          onAnswer={jest.fn()}
        />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
