import React from 'react'
import CalendarViewModel from '../app/viewModels/CalendarViewModel'
import { observer } from 'mobx-react'

type CalendarProps = {
  viewModel: CalendarViewModel
}

export default observer(({ viewModel }: CalendarProps) => {
  return <></>
})
