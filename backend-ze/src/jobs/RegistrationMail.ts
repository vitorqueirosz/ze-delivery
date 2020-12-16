import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Ze Delivery - App de bebidas <zevelivery@gmail.com>',
      to: `${user.email}`,
      subject: 'Cadastro de usuario',
      html: 'Obrigado por se cadastrar no Ze delivery!',
    });
  },
};
