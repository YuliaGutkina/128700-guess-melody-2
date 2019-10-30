import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./components/app/app";
import {questions} from "./mocks/questions";

const init = (gameQuestions) => {
  const settings = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        questions={gameQuestions}
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
