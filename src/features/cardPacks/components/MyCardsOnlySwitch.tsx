import React from 'react'
import { FormControl, FormControlLabel, FormGroup, Switch } from '@mui/material'
import { useAppDispatch } from '../../../common/hooks'

type MyCardsOnlySwitchPropsType = {
  isMyPacks: boolean
  setIsMyPacks: (isMyPacks: boolean) => void
}

export const MyCardsOnlySwitch: React.FC<MyCardsOnlySwitchPropsType> = (props) => {
  const { isMyPacks, setIsMyPacks } = props

  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMyPacks(event.target.checked)
  }

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Switch color="primary" checked={isMyPacks} onChange={handleChange} />}
          label="My packs only"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  )
}
