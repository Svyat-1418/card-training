import { TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../common/hooks'
import { addCardsQueryParamsAC } from '../cardsSlice'
import { useDebounce } from '../../../common/hooks/useDebounce'

export const CardsQuestionSearch = () => {
  const dispatch = useAppDispatch()

  const [searchRequest, setSearchRequest] = useState('')
  const debouncedValue = useDebounce(searchRequest)

  const searchHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchRequest(e.currentTarget.value)
  }

  useEffect(() => {
    dispatch(addCardsQueryParamsAC({ queryParams: { cardQuestion: debouncedValue } }))
  }, [debouncedValue])

  return (
    <TextField
      id="filled-search"
      label="Search"
      type="search"
      variant="filled"
      onChange={searchHandler}
    />
  )
}
