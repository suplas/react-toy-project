import styled, { css } from 'styled-components'
import { inject, observer } from 'mobx-react'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'
import CalendarStore from '../../app/stores/CalendarStore'

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
            background-color: #83dcb7;
            border-radius: 3rem;
          `
        : css``}
    ${({ clickDay }) =>
      clickDay
        ? css`
            color: #fff;
            background-color: #83dcb7;
            border-radius: 3rem;
          `
        : css``}
  }
`

type StoreProps = {
  store?: StoreType
  viewModel: CalenderViewModel
  day: Date
}

type StoreType = {
  calendar: CalendarStore
}

export default inject('store')(
  observer(({ store, viewModel, day }: StoreProps) => {
    const { nowDate, clickedDate, setclickedDate } = store!.calendar
    const nowTime: Date = new Date()
    const sameMonth: boolean = nowDate.getMonth() === day.getMonth()
    const sameDay: boolean =
      nowTime.getFullYear() === day.getFullYear() &&
      nowTime.getMonth() === day.getMonth() &&
      nowTime.getDate() === day.getDate()

    const clickDay: boolean = clickedDate
      ? clickedDate.getFullYear() === day.getFullYear() &&
        clickedDate.getMonth() === day.getMonth() &&
        clickedDate.getDate() === day.getDate()
      : false

    return (
      <Container onClick={() => setclickedDate(day)} sameMonth={sameMonth} sameDay={sameDay} clickDay={clickDay}>
        <p>{day.getDate()}</p>
      </Container>
    )
  }),
)
