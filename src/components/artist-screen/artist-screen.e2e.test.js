import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistScreen} from "./artist-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Artist screen returns correct answer`, () => {
  const answerHandler = jest.fn(() => `<input/>`);
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
    ]
  };

  const screen = shallow(<ArtistScreen
    question={question}
    onAnswer={answerHandler}/>);

  const form = screen.find(`form`);
  form.find(`#answer-0`).simulate(`change`);
  form.simulate(`change`);
  expect(answerHandler).toHaveReturnedWith(`<input/>`);
});
