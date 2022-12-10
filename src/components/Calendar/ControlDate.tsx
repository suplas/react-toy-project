import styled from 'styled-components'
import { Button } from '@mui/material'
import { observer } from 'mobx-react'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigatePrevtIcon from '@mui/icons-material/NavigateBefore'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPrevIcon from '@mui/icons-material/SkipPrevious'

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

type CalendarProps = {
  viewModel: CalenderViewModel
}

export default observer(({ viewModel }: CalendarProps) => {
  return (
    <Container>
      <ControllBox>
        <ControllButton
          onClick={() => {
            viewModel.changeYear(-1)
          }}
        >
          <SkipPrevIcon />
        </ControllButton>
        <ControllButton
          onClick={() => {
            viewModel.changeMonth(-1)
          }}
        >
          <NavigatePrevtIcon />
        </ControllButton>
      </ControllBox>
      <ControllTitle>
        <h1>{`${viewModel.nowDate.getMonth() + 1}. ${viewModel.nowDate.getFullYear()}`}</h1>
      </ControllTitle>
      <ControllBox>
        <ControllButton
          onClick={() => {
            viewModel.changeMonth(+1)
          }}
        >
          <NavigateNextIcon />
        </ControllButton>
        <ControllButton
          onClick={() => {
            viewModel.changeYear(+1)
          }}
        >
          <SkipNextIcon />
        </ControllButton>
      </ControllBox>
    </Container>
  )
})
