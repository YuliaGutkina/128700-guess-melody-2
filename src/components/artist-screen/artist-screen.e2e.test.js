import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistScreen} from "./artist-screen";
import {artistQuestion} from "../../mocks/questions";

Enzyme.configure({adapter: new Adapter()});

it(`Artist screen returns correct answer`, () => {
  const answerHandler = jest.fn(() => `<input/>`);
  const screen = shallow(<ArtistScreen
    question={artistQuestion}
    onAnswer={answerHandler}/>);

  const form = screen.find(`form`);
  form.find(`#answer-0`).simulate(`change`);
  form.simulate(`change`);
  expect(answerHandler).toHaveReturnedWith(`<input/>`);
});
