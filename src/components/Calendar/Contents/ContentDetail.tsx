import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalendarStore from '../../../stores/CalendarStore'
import BaseStore from '../../../stores/BaseStore'

type StoreProps = {
  store?: StoreType
  item: Array<T>
}

type StoreType = {
  calendar: CalendarStore
  base: BaseStore
}

const Container = styled.div`
  width: auto;
  height: 100vh;
  background: linear-gradient(to bottom, #f4fffa, #83dcb7, #178e5c);
  padding: 0 1rem;
`

const WriteHour = styled.div`
  font-size: 0.8rem;
  opacity: 0.5;
  flex-grow: 0;
  font-size: 0.7rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #83dcb7;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const Subject = styled.div`
  flex-grow: 2;
`

const Content = styled.div`
  white-space: pre-wrap;
  word-break: break-all;
`

export default inject('store')(
  observer(({ store, item }: StoreProps) => {
    const { dateFormat } = store?.calendar

    return (
      <Container>
        <Title>
          <Subject>{item.title}</Subject>
          <WriteHour>{dateFormat(item.createHour, 'his')}</WriteHour>
        </Title>
        <Content>{item.content}</Content>
      </Container>
    )
  }),
)
