import { Button } from '@mui/material'
import React from 'react'
import styles from '../cardPacks.module.css'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { deleteCardPack } from '../cardPacksSlice'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SchoolIcon from '@mui/icons-material/School'
import { DeleteCardPackModal } from '../modals/deleteCardPackModal/DeleteCardPackModal'

type ActionsPropsTypes = {
  setEditModeCb: (id: string) => void
  currentName: string
  userId: string
  packId: string
  packName: string
}

export const Actions: React.FC<ActionsPropsTypes> = ({
  currentName,
  packName,
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
    dispatch(deleteCardPack(packId))
  }

  return (
    <div className={styles.btnFlex}>
      <Button disabled>
        <SchoolIcon fontSize={'small'} />
      </Button>
      <Button disabled={ifBtnDisabled} onClick={editOnClickHandler}>
        <EditIcon fontSize={'small'} />
      </Button>

      <DeleteCardPackModal id={packId} packName={packName} />

      {/*<Button disabled={ifBtnDisabled} onClick={deleteOnClickHandler}>
        <DeleteIcon fontSize={'small'} />
      </Button>*/}
    </div>
  )
}
