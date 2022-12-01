import React from 'react'
import { useAppDispatch } from '../../common/hooks'
import { useFormik } from 'formik'
import { Button, TextField } from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import { Navigate, NavLink } from 'react-router-dom'
import { PATH } from '../../common/enums/path'
import { registerTC } from './singnUp-slice'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'

type FormikErrorType = {
  email?: string
  password?: string
  confirmPassword?: string
}

export const SignUp = () => {
  const dispatch = useAppDispatch()

  const isRegistered = useSelector<RootStateType, boolean>((state) => state.registration.isSignedUp)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length <= 2) {
        errors.password = 'Password should be more than 2 symbols'
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
      }

      return errors
    },
    onSubmit: (values) => {
      dispatch(registerTC(values))
      formik.resetForm()
    },
  })

  if (isRegistered) {
    return <Navigate to={PATH.SIGNIN} />
  }

  return (
    <div>
      <div>
        <div>Sign Up</div>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <TextField
              variant="standard"
              label="email"
              margin="normal"
              {...formik.getFieldProps('email')}
            />
            <div>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</div>
            <TextField
              type="password"
              variant="standard"
              label="password"
              margin="normal"
              {...formik.getFieldProps('password')}
            />
            <div>
              {formik.touched.password && formik.errors.password ? formik.errors.password : null}
            </div>
            <TextField
              type="password"
              variant="standard"
              label="confirm password"
              margin="normal"
              {...formik.getFieldProps('confirmPassword')}
            />
            <div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null}
            </div>
            <Button
              type={'submit'}
              variant={'contained'}
              color={'primary'}
              style={{
                marginTop: '50px',
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '16px',
              }}
            >
              Sign Up
            </Button>
            <span>Already have an account?</span>
            <NavLink to={PATH.SIGNIN}>Sign in</NavLink>
          </FormGroup>
        </form>
      </div>
    </div>
  )
}
