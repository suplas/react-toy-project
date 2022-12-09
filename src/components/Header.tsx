import styled from 'styled-components'
import { observer } from 'mobx-react'
import SearchIcon from '@mui/icons-material/Search'

const Top = styled.div`
  position: relative;
  z-index: 2000;
  width: auto;
  border-bottom: 1px solid #e2e2e2;
`

const TitleArea = styled.div`
  height: 57px;
  width: auto;
  align-items: center;
  display: flex;
  padding: 0 10px;
`

const Title = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
`

const TopIconArea = styled.div`
  margin-left: auto;
  display: flex;
`

export default observer(() => {
  return (
    <Top>
      <TitleArea>
        <Title>달력</Title>
        <TopIconArea>
          <SearchIcon
            sx={{
              color: '#000',
            }}
          />
        </TopIconArea>
      </TitleArea>
    </Top>
  )
})
