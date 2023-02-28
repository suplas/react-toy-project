import { NextPage } from 'next'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import Auth from '../components/Auth/Login'

const Wrap = styled(Paper)`
  overflow: hidden;
  width: auto;
  display: flex;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
`

const Login: NextPage = () => {
  return (
    <Wrap elevation={24}>
      <Container>
        <Auth />
      </Container>
    </Wrap>
  )
}

export default Login
