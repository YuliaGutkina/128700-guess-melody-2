import React from "react";
import renderer from "react-test-renderer";
import {ArtistScreen} from "./artist-screen";
import {artistQuestion} from "../../mocks/questions";

it(`Artist Screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <ArtistScreen
          question={artistQuestion}
          onAnswer={jest.fn()}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
