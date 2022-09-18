import { Button, TextField } from '@mui/material'
import { BasicModal } from '../../../common/modal/Basicmodal'
import style from './modal.module.css'
import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../../common/hooks'
import EditIcon from '@mui/icons-material/Edit'
import { updateCardThunk } from '../cardsSlice'

type PropsType = {
  cardId: string
  packId?: string
  question: string
  answer: string
}

export const EditCardModal = ({ cardId, packId, question, answer }: PropsType) => {
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const [newQuestion, setQuestion] = useState(question)
  const [newAnswer, setAnswer] = useState(answer)

  const handleClose = () => setOpen(false)

  const handleOpen = () => setOpen(true)

  const onQuestionChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuestion(e.currentTarget.value)
  }
  const onAnswerChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswer(e.currentTarget.value)
  }

  const EditCardHandler = () => {
    setOpen(false)
    packId &&
      dispatch(
        updateCardThunk(
          {
            card: {
              _id: cardId,
              question: newQuestion,
              answer: newAnswer,
            },
          },
          packId
        )
      )
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <EditIcon fontSize={'small'} />
      </Button>
      <BasicModal open={open} handleClose={handleClose} modalName={'Edit card'}>
        <div className={style.textContainer}>
          <TextField
            label={'Question'}
            variant={'standard'}
            defaultValue={question}
            onChange={onQuestionChangeHandler}
            style={{ paddingBottom: '10px' }}
          />
          <TextField
            label={'Answer'}
            variant={'standard'}
            defaultValue={answer}
            onChange={onAnswerChangeHandler}
          />
        </div>
        <div className={style.buttonBlock}>
          <Button variant={'outlined'} onClick={handleClose}>
            Close
          </Button>
          <Button variant={'contained'} onClick={EditCardHandler}>
            Save
          </Button>
        </div>
      </BasicModal>
    </>
  )
}
