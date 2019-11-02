import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./components/app/app";
import {questions} from "./mocks/questions";
import {settings} from "./mocks/setting";

const init = (gameQuestions) => {
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
