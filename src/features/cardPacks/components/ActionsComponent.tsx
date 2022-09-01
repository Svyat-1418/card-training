import { Button } from '@mui/material'
import React from 'react'
import styles from '../cardPacks.module.css'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { deleteCardPackThunk } from '../cardPacksSlice'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SchoolIcon from '@mui/icons-material/School'

type ActionsPropsTypes = {
  setEditModeCb: (id: string) => void
  currentName: string
  userId: string
  packId: string
}

export const Actions: React.FC<ActionsPropsTypes> = ({
  currentName,
  userId,
  packId,
  setEditModeCb,
}) => {
  let currentUserId = useAppSelector((state) => state.app.userData._id)
  let dispatch = useAppDispatch()
  const ifBtnDisabled = userId !== currentUserId

  const editOnClickHandler = () => {
    setEditModeCb(packId)
  }
  const deleteOnClickHandler = () => {
    dispatch(deleteCardPackThunk(packId))
  }

  return (
    <div className={styles.btnFlex}>
      <Button disabled>
        <SchoolIcon fontSize={'small'} />
      </Button>
      <Button disabled={ifBtnDisabled} onClick={editOnClickHandler}>
        <EditIcon fontSize={'small'} />
      </Button>
      <Button disabled={ifBtnDisabled} onClick={deleteOnClickHandler}>
        <DeleteIcon fontSize={'small'} />
      </Button>
    </div>
  )
}
