import { inject, observer } from 'mobx-react'
import ControlDate from './ControlDate'
import DateBox from './DateBox'
import styled from 'styled-components'
import CalenderViewModel from '../../viewModels/CalendarViewModel'
import CalendarStore from '../../stores/CalendarStore'

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 45%;
`

const ContentTitleArea = styled.div`
  display: flex;
  width: auto;
  padding: 1rem 1rem;
  flex-wrap: wrap;
  flex-direction: row;
`

const Title = styled.div`
  color: #178e5c;
  font-size: 1.2rem;
  font-weight: bold;
  width: auto;
  background: linear-gradient(to top, #83dcb7 40%, transparent 40%);
`

type StoreProps = {
  store?: StoreType
  viewModel: CalenderViewModel
}

type StoreType = {
  calendar: CalendarStore
}

export default inject('store')(
  observer(({ store, viewModel }: StoreProps) => {
    const { clickedDate, contentTitleDateFormat } = store!.calendar
    const titleDate = contentTitleDateFormat(clickedDate)
    return (
      <Container>
        <ControlDate viewModel={viewModel} />
        <DateBox viewModel={viewModel} />
        <ContentTitleArea>
          <Title>{titleDate}</Title>
        </ContentTitleArea>
      </Container>
    )
  }),
)
