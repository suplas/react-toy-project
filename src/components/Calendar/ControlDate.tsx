import styled from 'styled-components'
import { Button } from '@mui/material'
import { inject, observer } from 'mobx-react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigatePrevtIcon from '@mui/icons-material/NavigateBefore'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPrevIcon from '@mui/icons-material/SkipPrevious'
import CalendarStore from '../../app/stores/CalendarStore'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'

const Container = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ControllBox = styled.div`
  border: 0;
  margin: 0;
  background-color: #fff;
  width: auto;
  margin: 0 auto;
`

const ControllButton = styled(Button)`
  border: 0;
  width: auto;
`

const ControllTitle = styled.div`
  width: auto;
  margin: 0 auto;
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
    const { changeYear, changeMonth, nowDate } = store!.calendar
    return (
      <Container>
        <ControllBox>
          <ControllButton
            onClick={() => {
              changeYear(-1)
            }}
          >
            <SkipPrevIcon />
          </ControllButton>
          <ControllButton
            onClick={() => {
              changeMonth(-1)
            }}
          >
            <NavigatePrevtIcon />
          </ControllButton>
        </ControllBox>
        <ControllTitle>
          <h1>{`${nowDate.getMonth() + 1}. ${nowDate.getFullYear()}`}</h1>
        </ControllTitle>
        <ControllBox>
          <ControllButton
            onClick={() => {
              changeMonth(+1)
            }}
          >
            <NavigateNextIcon />
          </ControllButton>
          <ControllButton
            onClick={() => {
              changeYear(+1)
            }}
          >
            <SkipNextIcon />
          </ControllButton>
        </ControllBox>
      </Container>
    )
  }),
)
