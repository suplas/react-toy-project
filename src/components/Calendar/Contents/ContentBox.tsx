import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalenderViewModel from '../../../viewModels/CalendarViewModel'
import CalendarStore from '../../../stores/CalendarStore'

const Container = styled.div`
  width: auto;
  height: 100px;
  margin: 1rem;
  border: 1px solid #83dcb7;
  background: rgba(23,142,92,0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const WriteHour = styled.div`
    font-size: 0.8rem;
    opacity: 0.5;
`

const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`

const Content = styled.div`
    
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
            <WriteHour>10:00 오후</WriteHour>
            <Title>23233</Title>
            <Content>
                1<br/>
                2<br/>
                3<br/>
            </Content>
      </Container>
    )
  }),
)
