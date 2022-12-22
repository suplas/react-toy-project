import styled from 'styled-components'
import { observer, inject } from 'mobx-react'
import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BaseStore from '../stores/BaseStore'

type BaseProps = {
  store?: StoreType
}

type StoreType = {
  base: BaseStore
}

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

const BackButton = styled(ArrowBackIcon)`
  padding: 0 0.5rem;
  width: auto;
  min-width: 30px;
`

const SubTitle = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: bold;
`

// MARK: header of parent
export default inject('store')(
  observer(({ store }: BaseProps) => {
    const { mainTitle } = store!.base
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

// MARK: header of child page with parent
export const SubHeader = inject('store')(
  observer(({ store }: BaseProps) => {
    const { pageTitle } = store!.base
    return (
      <Top>
        <TitleArea>
          <BackButton />
          <SubTitle>{pageTitle}</SubTitle>
        </TitleArea>
      </Top>
    )
  }),
)
