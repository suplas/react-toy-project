import React, { useState } from 'react'
import ControlDate from './ControlDate'
import DateBox from './DateBox'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`

const CalendarMain = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date())
  const [clickedDate, setClickedDate] = useState<Date>()

  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate}/>
      <DateBox 
        nowDate={nowDate}
        setNowDate={setNowDate}
        clickedDate={clickedDate}
        setClickedDate={setClickedDate}
      />
    </Container>
  )
}

export default CalendarMain
