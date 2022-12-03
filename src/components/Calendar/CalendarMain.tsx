import React, { useState } from 'react'
import { observer } from 'mobx-react'
import ControlDate from './ControlDate'
import DateBox from './DateBox'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`

type CalendarProps = {
  viewModel: CalenderViewModel
}

export default observer(({ viewModel }: CalendarProps) => {
  const nowDate = viewModel.nowDate
  const clickedDate = viewModel.clickedDate

  const setNowDate = (date: Date) => {
    viewModel.setNowDate(date)
  }

  const setClickedDate = (date: Date) => {
    viewModel.setclickedDate(date)
  }

  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
      <DateBox nowDate={nowDate} setNowDate={setNowDate} clickedDate={clickedDate} setClickedDate={setClickedDate} />
    </Container>
  )
})
