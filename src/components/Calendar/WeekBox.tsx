import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalendarStore from '../../stores/CalendarStore'

const Container = styled.div`
  background-color: #fff;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

type StoreProps = {
  store?: StoreType
  weekName: string
}

type StoreType = {
  calendar: CalendarStore
}

export default inject('store')(
  observer(({ store, weekName }: StoreProps) => {
    return (
      <Container>
        <p>{weekName}</p>
      </Container>
    )
  }),
)
