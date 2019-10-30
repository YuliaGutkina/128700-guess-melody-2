import React from "react";
import renderer from "react-test-renderer";
import {ArtistScreen} from "./artist-screen";

it(`Artist Screen correctly renders after relaunch`, () => {
  const question = {
    type: `artist`,
    song: {
      artist: `Jack Daniels`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  };

  const tree = renderer
    .create(
        <ArtistScreen
          question={question}
          onAnswer={jest.fn()}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
