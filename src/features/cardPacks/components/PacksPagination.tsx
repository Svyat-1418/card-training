import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useAppDispatch } from '../../../common/hooks'
import { getCardPacks } from '../cardPacksSlice'

type PaginationPropsType = {
  totalPages?: number
  isMyPacks: boolean
  currentUserId: string
}

export const PacksPagination: React.FC<PaginationPropsType> = ({
  totalPages,
  isMyPacks,
  currentUserId,
}) => {
  const [page, setPage] = useState(1)

  let dispatch = useAppDispatch()
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    if (!isMyPacks) {
      dispatch(getCardPacks())
    } else {
      dispatch(getCardPacks())
    }
  }

  return (
    <Stack spacing={2}>
      {/*<Typography>Page: {page}</Typography>*/}
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  )
}
