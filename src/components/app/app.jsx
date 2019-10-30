import React, {PureComponent} from 'react';
import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {GenreScreen} from "../genre-screen/genre-screen";
import {ArtistScreen} from "../artist-screen/artist-screen";

export class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onPlayClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array
};
