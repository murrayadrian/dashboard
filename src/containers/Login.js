import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Container'
import nautilus from '../assets/nautilus.svg'
import { v} from '../styles/variables'
import {LoginForm} from '../components/LoginForm'


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

const Login = () => {
  return (
    <SLogin w={'100%'} h={'100%'}>
      <LoginForm width={styles.form.width} type='column'
       justify='flex-start' gap='20px' padding={styles.form.padding}/>
      <img src={nautilus} alt='img'/>
    </SLogin>
  )
}

export default Login