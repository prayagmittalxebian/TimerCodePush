import React from "react";
import TimerPage from "./TimerPage";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";


const state = {
  time: {
    timerList: [],
    isTimerStarted: false,
    seconds: 0
  }
}
const mockStore = configureStore([thunk]);
const store = mockStore(state);

describe("Timer Transaction Row", () => {
  const snapshotProps = {

  };

  it("Linked Transaction Row SnapShot Test", () => {
    const tree = renderer
      .create(<TimerPage {...snapshotProps} store={store} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});