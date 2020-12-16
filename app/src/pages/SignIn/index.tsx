import AsyncStorage from '@react-native-community/async-storage';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { signInFailure, signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Content,
  ErrorText,
  TopContent,
  ForgotPasswordContainer,
  ForgotPasswordText,
} from './styles';

interface Auth {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail valido'),
    password: Yup.string().required('Senha obrigatória ').min(8),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (data: Auth) => handleSignIn(data),
    validationSchema: schema,
  });

  // eslint-disable-next-line no-shadow
  async function handleSignIn({ email, password }: Auth) {
    try {
      dispatch(signInRequest({ email, password }));
    } catch (error) {
      dispatch(signInFailure());
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>ENTRAR</Header>

          <TopContent>
            <Button isSocial enabled>
              ENTRAR COM FACEBOOK
            </Button>
          </TopContent>

          <Content>
            <Input
              isError={!!errors.email && !!touched.email}
              placeholder="E-mail"
              onChangeText={handleChange('email')}
              value={values.email}
              returnKeyType="next"
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}

            <Input
              isError={!!errors.password && !!touched.password}
              placeholder="Senha"
              onChangeText={handleChange('password')}
              value={values.password}
              returnKeyType="next"
              onBlur={handleBlur('password')}
              isPassword
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}

            <Button enabled onPress={handleSubmit}>
              ENTRAR
            </Button>

            <ForgotPasswordContainer>
              <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
            </ForgotPasswordContainer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
