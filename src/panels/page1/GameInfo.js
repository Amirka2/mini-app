import { useEffect, useState } from 'react';
import React from 'react'

const GameInfo = ((props) => {
    
    async function getTeam() {
        return await fetch('https://api.sportsdata.io/v3/csgo/scores/json/GamesByDate/2018-01-13?key=626a56acb8e74e75990bcf748827cf95')
        .then((response) => response.json())
        .then((responseJson) => {
          setValue(responseJson)
        })
        .catch((error) => {
          console.error(error);
        });
      }
      
      const [games, setValue] = useState([]);

      useEffect(() => {
        getTeam()
      }, [])

      return (
        <div>
          {games.map(elem => {
          return <div>{elem.GameId}</div>
        })}
        </div>
        // <div>
        //     <div>{game.DateTime.toString().split('T')[0]}    {game.DateTime.toString().split('T')[1]}</div>
        //     <div>{game.TeamAName} {game.TeamAScore}:{game.TeamBScore} {game.TeamBName}</div>
        //     <div>Сезон: {game.SeasonType} Группа: {game.Group} Стадия: {game.Status} Тип игры: Best of {game.BestOf}</div>
        // </div>
        )
})

export default GameInfo