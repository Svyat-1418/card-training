import { Button, TextField } from '@mui/material'
import { BasicModal } from '../../../common/modal/Basicmodal'
import style from './modal.module.css'
import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../../common/hooks'
import { addCardThunk } from '../cardsSlice'

type PropsType = {
  packId?: string
}

export const AddCardModal = ({ packId }: PropsType) => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const [newQuestion, setQuestion] = useState('')
  const [newAnswer, setAnswer] = useState('')

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const onQuestionChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestion(e.currentTarget.value)
  }
  const onAnswerChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(e.currentTarget.value)
  }

  const addCardHandler = () => {
    setOpen(false)
    dispatch(
      addCardThunk({
        card: { cardsPack_id: packId, question: newQuestion, answer: newAnswer },
      })
    )
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        add new card
      </Button>
      <BasicModal open={open} handleClose={handleClose} modalName={'Edit card'}>
        <div className={style.textContainer}>
          <TextField
            label={'Question'}
            variant={'standard'}
            onChange={onQuestionChangeHandler}
            style={{ paddingBottom: '10px' }}
          />
          <TextField label={'Answer'} variant={'standard'} onChange={onAnswerChangeHandler} />
        </div>
        <div className={style.buttonBlock}>
          <Button variant={'outlined'} onClick={handleClose}>
            Close
          </Button>
          <Button variant={'contained'} onClick={addCardHandler}>
            Add
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
