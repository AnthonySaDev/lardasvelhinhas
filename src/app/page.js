'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import pessoal from '../../public/pessoal.jpg';
import about from '../../public/about.jpg';
import doe from '../../public/doe.jpg';

export default function Home() {

  return (
    <div className="bg-[#CAE4DB] w-full h-fit">
      <Head>
        <title>Lar das Velhinhas</title>
        <link rel="apple-touch-icon" tamanhos="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png" /> <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png" /> <link rel="manifest" href="/site.webmanifest" /> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> <meta name="msapplication-TileColor" content="#da532c " /> <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className='w-full text-[#00303F]'>
        <div className='text-center lg:flex items-center justify-center lg:h-screen pt-24 lg:pt-0'>
          <div className='flex flex-col gap-10 '>
            <h1 className='text-[2rem] font-bold'>
              Bem-vindo ao Lar das Velhinhas  Semeando Amor!
            </h1>
            <p className='lg:p-6 p-2 lg:w-7/12 mx-auto text-[1.2rem]'>
              Nosso Lar é um refúgio de carinho, cuidado e dignidade para as pessoas mais sábias e experientes de nossa sociedade. No Lar das Velhinhas, estamos comprometidos em proporcionar um ambiente acolhedor e seguro para nossos residentes idosos. No entanto, para continuarmos a oferecer essa qualidade de vida, contamos com a sua ajuda.</p>
            <a href='/#ajude'>
              <button className='bg-[#DCAE1D] hover:brightness-125 transition-all ease-in duration-300 p-4 rounded-lg w-fit mx-auto'>AJUDAR AGORA</button>
            </a>
          </div>
          <Image src={pessoal} alt="pessoal" className='lg:w-7/12 mx-auto h-fit mt-5 object-cover lg:rounded-l-[4rem] ' />
        </div>

        <div className='my-10 text-center' id='sobre'>
          <h1 className='text-[2rem] font-bold'>
            Sobre nós</h1>
          <p className='lg:p-6 p-2 lg:w-7/12 mx-auto text-[1.1rem]'>
            No Lar das Velhinhas, nossa missão é simples, mas significativa: proporcionar cuidado e dignidade aos idosos que tanto fizeram por nossa comunidade ao longo de suas vidas. Nosso lar é um refúgio de afeto, onde os anos de experiência e sabedoria são honrados a cada dia.
            Nossa equipe é composta por profissionais dedicados e voluntários que trabalham em conjunto para criar um ambiente caloroso e acolhedor. Estamos empenhados em garantir que cada residente viva seus anos dourados com alegria, conforto e amor.
            Junte-se a nós nessa missão de honrar e cuidar de nossos idosos. Seja parte dessa história de amor e dedicação que é o Lar das Velhinhas.
          </p>

          <Image src={about} alt='sobre' className='rounded-full object-cover lg:w-4/12 mx-auto' />
        </div>


        <div className='my-10 text-center' id='ajude'>

        <h1 className='text-[2rem] font-bold'>
            Como Você Pode Ajudar:
          </h1>
          <p className='lg:p-6 p-2 my-4 lg:w-7/12 mx-auto text-[1.2rem]'>
            Estamos sempre em busca de doações para garantir que possamos oferecer os melhores cuidados possíveis aos nossos residentes. Você pode ajudar de várias maneiras:</p>
            <div className='flex flex-col items-start lg:w-1/2 lg:mx-auto justify-center gap-4 px-3 text-left text-[1rem]'>
            <p>
            <strong>Doação financeira:</strong> Qualquer quantia faz a diferença. Sua contribuição ajuda a cobrir despesas com alimentação, cuidados médicos e atividades recreativas.<br></br>
            <strong>💜 Doe pelo Pix 16.923.245/0001-20</strong>
            </p>
       
            <p>

            <strong>Doação de tempo:</strong> Se você puder dedicar seu tempo como voluntário, será uma dádiva inestimável para nossos idosos. Seja parte de sua jornada e compartilhe seu carinho.<br></br>
            <strong>💚 Aceitamos visitas no endereço: Rua Dom João Pimenta, 65 - Centro, Montes Claros - MG, 39400-003</strong>
          </p>
          <p>
             <strong>Doação de suprimentos:</strong> Aceitamos doações de alimentos, roupas, produtos de higiene e outros itens essenciais.<br></br>
             <strong>🧡 Para mais informações entre em contato:(38) 3221-1299</strong>
          </p>
            </div>
            <Image src={doe} alt='doe' className='rounded-full object-cover lg:w-4/12 mx-auto mt-5' />
          
        </div>

      </main>
      <Footer />
    </div>
  );
}
