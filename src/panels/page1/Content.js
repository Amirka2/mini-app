import React from 'react'
import Styles from './Content.module.css'
import Match from './Match'

import { Card, Separator } from "@vkontakte/vkui"

export default function Content(props) {
  const matchValue = 5;
   function Matches(props) {
    let mtchs = []
    for (let i = 0; i < props.matchV; i++) {
      mtchs.push(<div>
        <Match go={props.go}></Match>
        <Separator></Separator>
      </div>);
      return mtchs;
    };
  }
  debugger;
  return (
    <Card mode="shadow" style={{padding: 14}} className={Styles.mainWrapper}>
    <Matches matchV={matchValue}/>
    </Card>
  )
}
