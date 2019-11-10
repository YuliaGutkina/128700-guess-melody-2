import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {AudioPlayer} from "../audio-player/audio-player";

export class GenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {question, onAnswer} = this.props;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle
            className="timer__line" cx={390} cy={390} r={370}
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>
        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>
        <div className="game__mistakes">
          <div className="wrong" />
          <div className="wrong" />
          <div className="wrong" />
        </div>
      </header>
      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form className="game__tracks" onSubmit={onAnswer}>
          {question.answers.map((song, index) =>
            <div key={song.src + index} className="track">
              <AudioPlayer
                src={song.src}
                isPlaying={index === this.state.activePlayer}
                onPlayButtonClick={() => this.setState({
                  activePlayer: this.state.activePlayer === index ? -1 : index
                })}
              />
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  defaultValue={`answer-${index}`}
                  id={`answer-${index}`} />
                <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
              </div>
            </div>
          )}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GenreScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired
        })
    )
  }),
  onAnswer: PropTypes.func.isRequired
};
