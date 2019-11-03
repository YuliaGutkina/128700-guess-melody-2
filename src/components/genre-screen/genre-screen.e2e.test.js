import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreScreen} from "./genre-screen";
import {genreQuestion} from "../../mocks/questions";

Enzyme.configure({adapter: new Adapter()});

it(`Genre screen returns correct answer`, () => {
  const answerHandler = jest.fn();
  const mockEvent = {target: `abc`};

  const screen = shallow(<GenreScreen
    question={genreQuestion}
    onAnswer={answerHandler}/>);

  const form = screen.find(`form`);
  form.find(`#answer-0`).simulate(`change`);
  form.simulate(`submit`, mockEvent);

  expect(answerHandler).toHaveBeenCalledWith(mockEvent);
});
