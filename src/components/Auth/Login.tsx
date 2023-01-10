import { Button, Paper, TextField } from '@mui/material'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import BaseStore from '../../stores/BaseStore'
import KakaoButton from '../Auth/KakaoAuth'

type StoreProps = {
  store?: StoreType
  // viewModel: AuthViewModel
}

type StoreType = {
  // auth: AuthStore
  base: BaseStore
}

const Main = styled.main`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
`

const Article = styled.article`
  justify-content: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`

const SubjectBox = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  padding: 0 1.5rem;
  flex-grow: 0;
  justify-content: center;
`

const SubjectText = styled.p`
  font-size: 2rem;
  color: #83dcb7;
  font-weight: bold;
  word-break: break-all;
`

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex-grow: 1;
  margin-top: 2rem;
`

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InputField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#83dcb7',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#83dcb7',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#83dcb7',
    },
    '&:hover fieldset': {
      borderColor: '#83dcb7',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#83dcb7',
    },
  },
  margin: `0.5rem 0.5rem`,
  width: `auto`,
})

const SubmitButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#83dcb7',
    boxShadow: 'none',
  },
  border: '1px solid #83dcb7',
  backgroundColor: '#83dcb7',
  color: '#fff',
  margin: '1rem 0.5rem',
  width: 'auto',
})


const JoinBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0.5rem;
  border: 1px solid #83dcb7;
  width: auto;
`

const JoinButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#83dcb7',
    boxShadow: 'none',
  },
  border: '1px solid #83dcb7',
  backgroundColor: '#83dcb7',
  color: '#fff',
  margin: '1rem',
  width: 'auto',
})

const SnsButtonSection = styled.section`
  display: flex;
  width: auto;
  flex-wrap: wrap;
  margin: 1rem 0.5rem;
  flex-direction: row;
  justify-content: center;
`

export default inject('store')(
  observer(({ store }: StoreProps) => {
    return (
      <Main>
        <Article>
          <SubjectBox>
            <SubjectText>Project Name has not been decided yet</SubjectText>
          </SubjectBox>
          <LoginBox>
            <FormBox>
              <InputField id="outlined-required" type="text" placeholder="아이디를 입력해주세요" required />
              <InputField id="outlined-password-input" type="password" placeholder="패스워드를 입력해주세요" required />
              <SubmitButton>로그인</SubmitButton>
            </FormBox>
            <JoinBox>
              <JoinButton>회원가입</JoinButton>
              <SubmitButton>아이디/비밀번호 찾기</SubmitButton>
            </JoinBox>
            <SnsButtonSection>
              <KakaoButton />
              <KakaoButton />
              <KakaoButton />
            </SnsButtonSection>
          </LoginBox>
        </Article>
      </Main>
    )
  }),
)
