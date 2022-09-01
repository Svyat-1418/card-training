import React from 'react'
import { FormControl, FormControlLabel, FormGroup, Switch } from '@mui/material'
import { useAppDispatch } from '../../../common/hooks'
import { setPrivateMode } from '../cardPacksSlice'

type MyCardsOnlySwitchPropsType = {
  privateMode: boolean
}

export const MyCardsOnlySwitch: React.FC<MyCardsOnlySwitchPropsType> = ({ privateMode }) => {
  let dispatch = useAppDispatch()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrivateMode(event.target.checked))
  }

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Switch color="primary" checked={privateMode} onChange={handleChange} />}
          label="My packs only"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  )
}
