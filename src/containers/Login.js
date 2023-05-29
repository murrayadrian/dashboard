import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import nautilus from '../assets/nautilus.svg'
import {Logo} from '../components/Logo'
import { v} from '../styles/variables'
import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'

const styles = v.loginPage;

const SLogin = styled(Container)`
  background: ${styles.backgroundColor};
  padding-right: ${styles.paddingRight};
  margin:0 auto;
  img{
    width:${styles.img.width};
    height:'100%';
  }
`
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const onSubmit = async values => {
  await sleep(300)
  if (values.username !== 'vinh') {
    return { username: 'Unknown username' }
  }
  if (values.password !== 'vinh') {
    return { [FORM_ERROR]: 'Login Failed' }
  }
  window.alert('LOGIN SUCCESS!')
}

const Login = () => {
  return (
    <SLogin w={'100%'} h={'100%'}>
      <Container w={styles.form.width} t='column' justify='flex-start' gap='20px'>
        <Logo/>
        

        <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        return errors
      }}
      render={({
        submitError,
        handleSubmit,
        form,
        submitting,
        pristine,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span>{meta.error || meta.submitError}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Log In
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />


      </Container>
      <img src={nautilus} alt='img'/>
    </SLogin>
  )
}

export default Login