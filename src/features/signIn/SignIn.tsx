import React from 'react'
import { Button, Checkbox, Grid, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { useFormik } from 'formik'
import { useAppDispatch } from '../../common/hooks'
import { loginTC } from './signIn-slice'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../app/store'
import { Navigate } from 'react-router-dom'

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const SignIn = () => {
  const dispatch = useAppDispatch()

  const isLoggedIn = useSelector<RootStateType, boolean>((state) => state.login.isLoggedIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
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

      return errors
    },
    onSubmit: (values) => {
      dispatch(loginTC(values))
      formik.resetForm()
    },
  })

  if (isLoggedIn) {
    return <Navigate to={'/personal-information'} />
  }

  return (
    <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <h1>Sign in</h1>
            <FormGroup>
              <TextField label="Email" margin="normal" {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              )}
              <FormControlLabel
                label={'Remember me'}
                control={
                  <Checkbox
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                    name={'rememberMe'}
                  />
                }
              />
              <Button type={'submit'} variant={'contained'} color={'primary'}>
                Sign in
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}
