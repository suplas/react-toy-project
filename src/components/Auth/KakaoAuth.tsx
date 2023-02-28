import { inject, observer } from 'mobx-react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'

const KakaoLoginButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#fee600',
    boxShadow: 'none',
  },
  width: '100%',
  background: '#fee600',
  margin: '0.5rem 0',
})


const KakaoButtonImage = styled.img`
  width: 100%;
  max-width: 183px;
` 

export default inject('store')(
  observer(() => {
    return (
      <KakaoLoginButton>
        <KakaoButtonImage src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" />
      </KakaoLoginButton>
    )
  }),
)
