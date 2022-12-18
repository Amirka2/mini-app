import React from 'react'
import Styles from './MatchInfo.module.css'
import GameInfo from './GameInfo'

export default function (props) {
  return (
    <div className={props.isHidden ? Styles.hidden : Styles.notHidden}><GameInfo></GameInfo></div>
  )
}
