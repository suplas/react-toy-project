import styled, { css } from 'styled-components'
import { observer } from 'mobx-react'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'

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

type CalendarProps = {
  viewModel: CalenderViewModel
  day: Date
}

export default observer(({ viewModel, day }: CalendarProps) => {
  const nowTime: Date = new Date()
  const sameMonth: boolean = viewModel.nowDate.getMonth() === day.getMonth()
  const sameDay: boolean =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate()

  const clickDay: boolean = viewModel.clickedDate
    ? viewModel.clickedDate.getFullYear() === day.getFullYear() &&
      viewModel.clickedDate.getMonth() === day.getMonth() &&
      viewModel.clickedDate.getDate() === day.getDate()
    : false

  return (
    <Container onClick={() => viewModel.setclickedDate(day)} sameMonth={sameMonth} sameDay={sameDay} clickDay={clickDay}>
      <p>{day.getDate()}</p>
    </Container>
  )
})
