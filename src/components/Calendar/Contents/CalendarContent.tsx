import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalenderViewModel from '../../../viewModels/CalendarViewModel'
import CalendarStore from '../../../stores/CalendarStore'
import ContentBox from './ContentBox'

const Container = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, #f4fffa, #83dcb7, #178e5c);
  flex-grow: 1;
  flex-basis: 45%;
  border-top: 1px solid #f4fffa;
  overflow: auto;
  padding-bottom: 3.5rem;
`

const Header = styled.div`
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
        <Header>
          <Title>{titleDate}</Title>
        </Header>
        <ContentBox viewModel={viewModel} />
        <ContentBox viewModel={viewModel} />
        <ContentBox viewModel={viewModel} />
      </Container>
    )
  }),
)
