import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { Consumer } from "./Context";

class Player extends PureComponent {
  static protoTypes = {
    index: PropTypes.number.isRequired,
  };
  render() {
    const { index } = this.props;
    return (
      <div className="player">
        <Consumer>
          {({ actions, players }) => (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              {players[index].name}
            </span>
          )}
        </Consumer>

        <Counter index={index} />
      </div>
    );
  }
}

export default Player;
