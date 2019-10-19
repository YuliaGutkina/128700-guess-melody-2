import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./components/app/app";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`#root`)
  );
};

init();
