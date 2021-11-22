import React, { Component } from "react";

const ScoreboardContext = React.createContext();

export class Provider extends Component {
  state = {
    players: [
      {
        name: "Fradely",
        score: 0,
        id: 1,
      },
      {
        name: "Rossy",
        score: 0,
        id: 2,
      },
      {
        name: "Cami",
        score: 0,
        id: 3,
      },
      {
        name: "Sabrina",
        score: 0,
        id: 4,
      },
    ],
  };

  // player's id counter

  prevPlayerId = 4;
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };
  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };
  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;
