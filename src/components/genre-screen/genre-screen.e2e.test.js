import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreScreen} from "./genre-screen";

Enzyme.configure({adapter: new Adapter()});

it(`Genre screen returns correct answer`, () => {
  const answerHandler = jest.fn(() => `<input/>`);
  const question = {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `pop`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
    ]
  };

  const screen = shallow(<GenreScreen
    question={question}
    onAnswer={answerHandler}/>);

  const form = screen.find(`form`);
  form.find(`#answer-0`).simulate(`change`);
  form.simulate(`submit`);
  expect(answerHandler).toHaveReturnedWith(`<input/>`);
});
