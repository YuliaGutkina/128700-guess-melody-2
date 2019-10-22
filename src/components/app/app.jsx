import React from 'react';
import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

export const App = (props) => {
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
};
