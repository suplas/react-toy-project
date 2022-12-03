import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

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

  /* &:hover {
    background-color: yellow;
  } */
`

interface Props {
  nowDate: Date
  setNowDate: React.Dispatch<React.SetStateAction<Date>>
}

const ControlDate = ({ nowDate, setNowDate }: Props) => {
  const changeYear = (change: number) => {
    const date: Date = new Date(nowDate.getTime())
    date.setFullYear(date.getFullYear() + change)
    setNowDate(date)
  }

  const changeMonth = (change: number) => {
    const date: Date = new Date(nowDate.getTime())
    date.setMonth(date.getMonth() + change)
    setNowDate(date)
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
      <h1>{`${nowDate.getMonth() + 1}. ${nowDate.getFullYear()}`}</h1>
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
}

export default ControlDate
