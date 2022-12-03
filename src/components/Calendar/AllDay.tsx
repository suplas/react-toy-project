import React from 'react'
import styled, { css } from 'styled-components'

interface ContainerProps {
  sameMonth: boolean
  sameDay: boolean
  clickDay: boolean
}

const Container = styled.div<ContainerProps>`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff;
  }
  p {
    width: 20px;
    padding: 5px;
    text-align: center;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `100`)};
    ${({ sameDay }) =>
      sameDay
        ? css`
            color: #fff;
            background-color: pink;
            border-radius: 3rem;
          `
        : css``}
    ${({ clickDay }) =>
      clickDay
        ? css`
            color: #fff;
            background-color: pink;
            border-radius: 3rem;
          `
        : css``}
  }
`

interface Props {
  day: Date
  nowDate: Date
  setNowDate: React.Dispatch<React.SetStateAction<Date>>
  clickedDate: Date | undefined
  setClickedDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

const allDay = ({ day, nowDate, setNowDate, clickedDate, setClickedDate }: Props) => {
  const nowTime = new Date()

  const sameMonth = nowDate.getMonth() === day.getMonth()
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate()

  const clickDay: boolean = clickedDate
    ? clickedDate.getFullYear() === day.getFullYear() &&
      clickedDate.getMonth() === day.getMonth() &&
      clickedDate.getDate() === day.getDate()
    : false

  const clickDate = () => {
    setClickedDate(day)
  }
  return (
    <Container onClick={() => clickDate()} sameMonth={sameMonth} sameDay={sameDay} clickDay={clickDay}>
      <p>{day.getDate()}</p>
    </Container>
  )
}

export default allDay
