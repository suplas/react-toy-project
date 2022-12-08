import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { observer } from 'mobx-react'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'

const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BtnBox = styled.div`
  border: 0;
  margin: 0;
  background-color: #fff;
`

type CalendarProps = {
  viewModel: CalenderViewModel
}

export default observer(({ viewModel }: CalendarProps) => {
  const changeYear = (change: number) => {
    const date: Date = new Date(viewModel.nowDate.getTime())
    date.setFullYear(date.getFullYear() + change)
    viewModel.setNowDate(date)
  }

  const changeMonth = (change: number) => {
    const date: Date = new Date(viewModel.nowDate.getTime())
    date.setMonth(date.getMonth() + change)
    viewModel.setNowDate(date)
  }

  return (
    <Container>
      <BtnBox>
        <Button
          onClick={() => {
            changeYear(-1)
          }}
        >
          {'<<'}
        </Button>
        <Button
          onClick={() => {
            changeMonth(-1)
          }}
        >
          {'<'}
        </Button>
      </BtnBox>
      <h1>{`${viewModel.nowDate.getMonth() + 1}. ${viewModel.nowDate.getFullYear()}`}</h1>
      <BtnBox>
        <Button
          onClick={() => {
            changeMonth(+1)
          }}
        >
          {'>'}
        </Button>
        <Button
          onClick={() => {
            changeYear(+1)
          }}
        >
          {'>>'}
        </Button>
      </BtnBox>
    </Container>
  )
})
