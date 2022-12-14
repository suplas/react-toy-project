import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import SearchIcon from '@mui/icons-material/Search'
import BaseStore from '../stores/BaseStore'

const Top = styled.div`
  position: relative;
  z-index: 2000;
  width: auto;
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

type BaseProps = {
  store?: StoreType
}

type StoreType = {
  base: BaseStore
}

export default inject('store')(
  observer(({store}: BaseProps) => {
    const {mainTitle} = store!.base
    return (
      <Top>
        <TitleArea>
          <Title>{mainTitle}</Title>
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
  }),
)
