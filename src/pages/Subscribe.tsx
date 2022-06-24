import { gql, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBE_MUTATION
  );
  const navigate = useNavigate();

  const handleSubmit = async function (event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  };

  return (
    <div className="bg-pattern bg-cover bg-no-repeat min-h-screen flex flex-col items-center">
      <div className="max-w-[1100px] w-full flex items-center justify-between mt-20">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{' '}
            <strong className="text-blue-500 font-medium">
              aplicação completa
            </strong>
            , do zero, com{' '}
            <strong className="text-blue-500 font-medium">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu nome completo"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />

            <button
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-60"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/mockup.png" className="mt-10" alt="Mockup" />

      <Footer />
    </div>
  );
}
