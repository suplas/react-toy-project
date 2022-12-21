import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalenderViewModel from '../../../viewModels/CalendarViewModel'
import CalendarStore from '../../../stores/CalendarStore'
import { useEffect } from 'react'

const Container = styled.div`
  width: auto;
  height: auto;
  margin: 1rem;
  border: 1px solid #83dcb7;
  background: rgba(23, 142, 92, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const WriteHour = styled.div`
  font-size: 0.8rem;
  opacity: 0.5;
  margin-bottom: 0.5rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const Content = styled.div`
  white-space: pre-wrap;
  word-break: break-all;
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
    const { dateFormat } = store?.calendar
    const { contentItems } = viewModel
    useEffect(() => {
      viewModel.fetchContentList()
    }, [])
    return (
      <>
        {contentItems?.map(item => (
          <Container key={item.seq}>
            <WriteHour>{dateFormat(item.createHour, 'his')}</WriteHour>
            <Title>{item.title}</Title>
            <Content>{item.content}</Content>
          </Container>
        ))}
      </>
    )
  }),
)
