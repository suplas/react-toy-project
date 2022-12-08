import React from 'react'
import WeekBox from './WeekBox'
import AllDay from './AllDay'
import Box from '@mui/material/Box'
import { observer } from 'mobx-react'
import CalenderViewModel from '../../app/viewModels/CalendarViewModel'

type CalendarProps = {
  viewModel: CalenderViewModel
}

export default observer(({ viewModel }: CalendarProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        backgroundColor: '#fff',
        border: 0,
      }}
    >
      {viewModel.weeks.map(week => {
        return <WeekBox key={week} weekName={week} />
      })}
      {viewModel.allDay.map((day: Date) => {
        return <AllDay key={day.getTime()} viewModel={viewModel} day={day} />
      })}
    </Box>
  )
})
