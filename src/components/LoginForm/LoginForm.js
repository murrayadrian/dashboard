import {Form, Field} from 'react-final-form'
import {FORM_ERROR} from 'final-form'
import { Container } from '../Container'
import styled from 'styled-components';
import { Logo } from '../Logo';

const FormContainer = styled(Container)`
  padding: ${props=>props.padding};
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

export const LoginForm =({width, type, justify, gap, padding}) =>{
    return(
        <FormContainer w={width} t={type} justify={justify} gap={gap} padding={padding}>
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
    </FormContainer>
    )
}