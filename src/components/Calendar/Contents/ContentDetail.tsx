import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import CalenderViewModel from '../../../viewModels/CalendarViewModel'
import CalendarStore from '../../../stores/CalendarStore'
import Link from 'next/link'

type StoreProps = {
  store?: StoreType
  viewModel: CalenderViewModel
}

type StoreType = {
  calendar: CalendarStore
}



export default inject('store')(
  observer(({ store, viewModel }: StoreProps) => {
        return (
      <>
       12323
      </>
    )
  }),
)
