import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon  from "./icon";

class Player extends PureComponent {
  static protoTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  };
  render() {
    const { name, id, score, index, removePlayer, changeScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>
        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
