import { NextPage } from 'next'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import { SubHeader as Header } from '../../components/Header'
import ContentDetail from '../../components/Calendar/Contents/ContentDetail'
import Footer from '../../components/Footer'

const Wrap = styled(Paper)`
  overflow: hidden;
  width: auto;
  height: 100vh;
  display: block;
  flex-direction: column;
`

const Container = styled.div`
  display: block;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  flex-wrap: wrap;
`

const Calendar: NextPage = () => {
  const item = {
    seq: 1,
    title: '제목 1',
    createHour: new Date('2023.1.3 8:30'),
    content: '본문내용노출본문내용노출본문내용노출본문내용노출본문내용노출본문내용노출본문내용노출\n본문내용노출본문내용노출',
  }
  return (
    <Wrap>
      <Container>
        <Header />
        <ContentDetail item={item} />
        <Footer />
      </Container>
    </Wrap>
  )
}

export default Calendar
