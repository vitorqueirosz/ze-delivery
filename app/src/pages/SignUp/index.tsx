import React, { ReactText, useState } from 'react';
import * as Yup from 'yup';

import { useFormik } from 'formik';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import CheckBox from '../../components/Checkbox';
import Button from '../../components/Button';

import Header from '../../components/Header';
import Input from '../../components/Input';

import {
  Wrapper,
  Container,
  Content,
  HeaderContainer,
  Title,
  AskTitle,
  AskContainer,
  TitleContainer,
  SubTitle,
  SignInButton,
  SignInTitle,
  TopContainer,
  FormContainer,
  ErrorText,
  AlertText,
  TextContainer,
  TermsShortText,
  TermsText,
  CheckBoxContainer,
  TextTopContainer,
  InputAge,
  AgeText,
} from './styles';
import { User } from '../../interfaces/User';
import AgeModal from '../../components/AgeModal';
import {
  signUpFailure,
  signUpRequest,
} from '../../store/modules/signUp/actions';

const SignUp: React.FC = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [permissions, setPermissions] = useState(false);

  const [selectedAge, setSelectedAge] = useState<ReactText>('');
  const [isReady, setIsReady] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail não pode ficar vazio')
      .email('Digite um e-mail valido'),
    name: Yup.string()
      .matches(/(\w.+\s).+/, 'Digite um sobrenome')
      .required('Nome não pode ficar vazio'),
    cpf: Yup.string()
      .required('CPF não pode ficar vazio')
      .min(11, () => `Digite um CPF valido`),
    password: Yup.string()
      .required('Senha não pode ficar vazia ')
      .min(8, () => `Sua senha está muito pequena`)
      .matches(/(\d+)| /g, 'Sua senha está fora do padrão'),
    phone: Yup.string().required('Seu telefone não pode ficar vazio '),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isValid,
  } = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
      cpf: '',
      phone: '',
    },
    onSubmit: (data: User) => handleSignUp(data),
    validationSchema: schema,
  });

  console.log(isValid);

  async function handleSignUp(data: User) {
    try {
      const { name, email, password, cpf, phone } = data;

      const userPayload = { ...data, age: selectedAge };

      const age = selectedAge;

      await schema.validate(userPayload, {
        abortEarly: false,
      });

      dispatch(signUpRequest({ name, email, password, cpf, phone, age }));
    } catch (error) {
      dispatch(signUpFailure());
    }
  }

  console.log(errors);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Wrapper>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container contentContainerStyle={{ paddingBottom: 84 }}>
            {showModal && (
              <AgeModal
                show={showModal}
                setShowModal={setShowModal}
                age={selectedAge}
                setAge={setSelectedAge}
                setIsReady={setIsReady}
              />
            )}

            <Header>CADASTRE-SE PARA CONTINUAR</Header>

            <Content>
              <TopContainer>
                <HeaderContainer>
                  <Title>Visualize seus pedidos e ofertas exclusivas!</Title>
                  <TitleContainer>
                    <SubTitle>Ja possui uma conta?</SubTitle>
                    <SignInButton onPress={() => navigation.navigate('SignIn')}>
                      <SignInTitle>Entre aqui</SignInTitle>
                    </SignInButton>
                  </TitleContainer>

                  <Button isSocial enabled>
                    ENTRAR COM FACEBOOK
                  </Button>
                </HeaderContainer>
              </TopContainer>

              <FormContainer>
                <>
                  <Title style={{ marginBottom: 8 }}>
                    Ou se cadastre com seu e-mail
                  </Title>

                  <Input
                    isError={!!errors.name && !!touched.name}
                    placeholder="Nome e sobrenome"
                    onChangeText={handleChange('name')}
                    value={values.name}
                    returnKeyType="next"
                    onBlur={handleBlur('name')}
                  />
                  {errors.name && touched.name && (
                    <ErrorText>{errors.name}</ErrorText>
                  )}

                  <Input
                    isError={!!errors.email && !!touched.email}
                    placeholder="E-mail"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    keyboardType="email-address"
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
                    onBlur={handleBlur('password')}
                    isPassword
                  />
                  {errors.password && touched.password && (
                    <ErrorText>{errors.password}</ErrorText>
                  )}
                  <AlertText>
                    A senha deve conter 8 ou mais caracteres e ao menos 1 numero
                  </AlertText>

                  <Input
                    isError={!!errors.cpf && !!touched.cpf}
                    placeholder="CPF"
                    onChangeText={handleChange('cpf')}
                    value={values.cpf}
                    returnKeyType="next"
                    keyboardType="numeric"
                    onBlur={handleBlur('cpf')}
                  />
                  {errors.cpf && touched.cpf && (
                    <ErrorText>{errors.cpf}</ErrorText>
                  )}

                  <Input
                    isError={!!errors.phone && !!touched.phone}
                    placeholder="Celular DDD + número"
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    returnKeyType="next"
                    keyboardType="numeric"
                    onBlur={handleBlur('phone')}
                  />
                  {errors.phone && touched.phone && (
                    <ErrorText>{errors.phone}</ErrorText>
                  )}

                  <InputAge
                    onPress={() => {
                      setShowModal(true);
                      setIsReady(false);
                    }}
                  >
                    <AgeText isReady={isReady}>
                      {(isReady && selectedAge) || 'Idade'}
                    </AgeText>

                    <Feather size={25} color="#999" name="chevron-down" />
                  </InputAge>

                  <AskContainer>
                    <AskTitle>Por que pedimos essas informacoes?</AskTitle>
                  </AskContainer>

                  <CheckBoxContainer>
                    <CheckBox
                      isColor
                      disabled={false}
                      value={termsAndConditions}
                      onPress={() =>
                        setTermsAndConditions(prevState => !prevState)
                      }
                    />
                    <TextContainer>
                      <TextTopContainer>
                        <TermsText>Declaro que li e aceito os</TermsText>
                        <TermsShortText isAside>
                          termos e condicoes
                        </TermsShortText>
                        <TermsText>e a</TermsText>
                      </TextTopContainer>
                      <TermsShortText>politica de privacidade</TermsShortText>
                    </TextContainer>
                  </CheckBoxContainer>

                  <View>
                    <CheckBoxContainer>
                      <CheckBox
                        disabled={false}
                        value={permissions}
                        onPress={() => setPermissions(prevState => !prevState)}
                      />

                      <TermsText>
                        Quero receber os cupons de desconto e ofertas do Ze por
                        e-mail e SMS
                      </TermsText>
                    </CheckBoxContainer>
                  </View>

                  <Button
                    onPress={handleSubmit}
                    enabled={
                      isValid &&
                      !!selectedAge &&
                      permissions &&
                      termsAndConditions
                    }
                  >
                    CADASTRAR E CONTINUAR
                  </Button>
                </>
              </FormContainer>
            </Content>
          </Container>
        </TouchableWithoutFeedback>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
