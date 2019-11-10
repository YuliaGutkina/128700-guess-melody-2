import React from "react";
import renderer from "react-test-renderer";
import {AudioPlayer} from "./audio-player";

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {
      focus() {},
    };
  }
  return null;
}

it(`Genre Screen correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <AudioPlayer
          isPlaying={false}
          onPlayButtonClick={jest.fn()}
          src={`https://upload.wikimedia.org/wikipedia/commons/6/64/Ugandan_national_anthem%2C_performed_by_the_U.S._Navy_Band.ogg`}
        />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
