import React from 'react'
import WeekBox from './WeekBox'
import AllDay from './AllDay'
import Box from '@mui/material/Box'
import { inject, observer } from 'mobx-react'
import CalenderViewModel from '../../viewModels/CalendarViewModel'
import CalendarStore from '../../stores/CalendarStore'

type StoreProps = {
  store?: StoreType
  viewModel: CalenderViewModel
}

type StoreType = {
  calendar: CalendarStore
}

export default inject('store')(
  observer(({ store, viewModel }: StoreProps) => {
    const { allDay, weeks } = store!.calendar
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
        {weeks.map(week => {
          return <WeekBox key={week} weekName={week} />
        })}
        {allDay.map((day: Date) => {
          return <AllDay key={day.getTime()} viewModel={viewModel} day={day} />
        })}
      </Box>
    )
  }),
)
