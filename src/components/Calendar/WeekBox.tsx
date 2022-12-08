import styled from 'styled-components'

const Container = styled.div`
  background-color: #fff;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  weekName: string
}

const WeekBox = ({ weekName }: Props) => {
  return (
    <Container>
      <p>{weekName}</p>
    </Container>
  )
}

export default WeekBox
