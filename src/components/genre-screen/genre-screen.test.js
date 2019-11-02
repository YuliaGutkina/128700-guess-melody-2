import React from "react";
import renderer from "react-test-renderer";
import {GenreScreen} from "./genre-screen";
import {genreQuestion} from "../../mocks/questions";

it(`Genre Screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <GenreScreen
          question={genreQuestion}
          onAnswer={jest.fn()}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
