import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalenderViewModel from '../../../viewModels/CalendarViewModel'
import CalendarStore from '../../../stores/CalendarStore'
import ContentBox from './ContentBox'

const Container = styled.div`
  width: 100%;
  height: 35%;
  background: linear-gradient(to bottom, #f4fffa, #83dcb7, #178e5c);
  flex-grow: 1;
  flex-basis: 45%;
  border-top: 1px solid #f4fffa;
  padding-bottom: 3.5rem;
  overflow: auto;
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
    return (
      <Container>
        <ContentBox viewModel={viewModel} />
      </Container>
    )
  }),
)
