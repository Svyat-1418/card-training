import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useAppDispatch } from '../../../common/hooks'
import { getCardPacksThunk } from '../cardPacksSlice'

type PaginationPropsType = {
  totalPages?: number
  privateMode: boolean
  currentUserId: string
}

export const PacksPagination: React.FC<PaginationPropsType> = ({
  totalPages,
  privateMode,
  currentUserId,
}) => {
  const [page, setPage] = useState(1)

  let dispatch = useAppDispatch()
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    if (!privateMode) {
      dispatch(getCardPacksThunk(undefined, value))
    } else {
      dispatch(getCardPacksThunk(currentUserId, value))
    }
  }

  return (
    <Stack spacing={2}>
      {/*<Typography>Page: {page}</Typography>*/}
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  )
}
