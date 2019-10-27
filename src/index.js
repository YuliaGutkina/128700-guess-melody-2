import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./components/app/app";

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
    onPlayClick: ()=>{}
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onPlayClick={settings.onPlayClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
