import { inject, observer } from 'mobx-react'
import ControlDate from './ControlDate'
import DateBox from './DateBox'
import styled from 'styled-components'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'


const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
`

type CalendarProps = {
  viewModel: CalenderViewModel
}

export default observer(({viewModel}: CalendarProps) => {
  return (
    <Container>
      <ControlDate viewModel={viewModel} />
      <DateBox viewModel={viewModel} />
    </Container>
  )
})
