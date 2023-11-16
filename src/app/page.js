"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import pessoal from "../../public/pessoal.jpg";
import about from "../../public/about.jpg";
import doe from "../../public/doe.jpg";
import homeback from "../../public/homeBackground.jpg";
import box1 from "../../public/box1.png";
import box2 from "../../public/box2.png";
import box3 from "../../public/box3.png";
import box4 from "../../public/box4.png";
import box5 from "../../public/box5.png";
import box6 from "../../public/box6.png";
import anjos from "../../public/anjos.png";
import masks from "../../public/maks.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full h-fit">
      <Head>
        <title>Lar das Velhinhas</title>
        <link
          rel="apple-touch-icon"
          tamanhos="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          tamanhos="32x32 "
          href="/favicon-32x32.png"
        />{" "}
        <link
          rel="icon"
          type="image/png"
          tamanhos="16x16"
          href="/favicon-16x16.png"
        />{" "}
        <link rel="manifest" href="/site.webmanifest" />{" "}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />{" "}
        <meta name="msapplication-TileColor" content="#da532c " />{" "}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />

      <main className="w-full text-white">
        <div className="w-full relative">
          <Image
            src={homeback}
            className="w-full h-screen object-cover object-center opacity-80 brightness-75"
          />
        </div>
        <motion.div
          className="text-center lg:flex items-center justify-center lg:pt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col lg:text-[4rem] text-[2rem] absolute top-1/4 lg:w-4/5 w-full bg-black bg-opacity-10 p-8 rounded-2xl ">
            <motion.h1
              className=" font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Sejam bem-vindos!
            </motion.h1>
            <motion.p
              className="lg:p-6 p-2 lg:w-7/12 mx-auto "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              ao
            </motion.p>
            <motion.h1
              className=" font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Lar das Velhinhas
            </motion.h1>
            <motion.a
              href="/#ajude"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <motion.button className="bg-[#ED5A06] text-white font-bold text-[1.5rem] mt-20 hover:brightness-125 transition-all ease-in duration-300 px-10 py-2 rounded-[4rem] w-fit mx-auto">
                SAIBA MAIS
              </motion.button>
            </motion.a>
          </div>
        </motion.div>

        <div className=" text-center text-black my-16 lg:px-8" id="sobre">
          <h1 className="lg:text-[4rem] text-[2rem] font-bold text-center my-10">
            Sobre o Lar
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0  items-center justify-center">
            <motion.div
              className="lg:w-7/12 mx-auto h-fit mt-5 "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={pessoal}
                alt="pessoal"
                className="object-cover lg:rounded-[4rem]"
              />
            </motion.div>
            <div className="flex flex-col items-center gap-4 lg:p-6 p-2 lg:w-7/12 mx-auto text-[1.1rem] text-left">
              <p>
                Nosso Lar é um refúgio de carinho, cuidado e dignidade para as
                pessoas mais sábias e experientes de nossa sociedade{" "}
              </p>
              <p>
                No Lar das Velhinhas, estamos comprometidos em proporcionar um
                ambiente acolhedor e seguro para nossos residentes idosos. No
                entanto, para continuarmos a oferecer essa qualidade de vida,
                contamos com a sua ajuda.
              </p>
              <Link href="https://wa.me/553897470742?text=Olá,%20vim%20pelo%20site%20de%20vocês%20e%20gostaria%20de%20ajudar%20">
                <button className="bg-[#ED5A06] text-white font-bold text-[1.5rem] mt-5 hover:brightness-125 transition-all ease-in duration-300 px-10 py-2 rounded-[4rem] w-fit mx-auto">
                  ENVIE UMA MENSAGEM
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="missao"
          className="bg-[#F0E7E3] w-full mt-16 text-black px-8 py-16"
        >
          <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-0 justify-between">
            <Image
              src={about}
              alt="sobre"
              className="rounded-full object-cover lg:w-4/12 mx-auto"
            />
            <div className="px-4 lg:w-7/12 flex flex-col gap-4 text-[1.2rem]">
              <p>
                <strong>
                  No Lar das Velhinhas, nossa missão é simples, mas
                  significativa:{" "}
                </strong>
                proporcionar cuidado e dignidade aos idosos que tanto fizeram
                por nossa comunidade ao longo de suas vidas.
              </p>
              <p>
                Nosso lar é um refúgio de afeto, onde os anos de experiência e
                sabedoria são honrados a cada dia. Nossa equipe é composta por
                profissionais dedicados e voluntários que trabalham em conjunto
                para criar um ambiente caloroso e acolhedor.
              </p>
              <p>
                Estamos empenhados em garantir que cada residente viva seus anos
                dourados com alegria, conforto e amor. Junte-se a nós nessa
                missão de honrar e cuidar de nossos idosos.
              </p>
            </div>
          </div>
          <h1 className="text-[#ED5A06] mt-10 text-center text-[1.6rem] font-bold">
            Faça parte dessa história de amor e dedicação que é o Lar das
            Velhinhas...
          </h1>
        </div>

        <div
          id="box"
          className="bg-[#ED5A06] w-full flex items-center justify-center text-black px-8 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center">
            <Image
              src={box1}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
            <Image
              src={box2}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
            <Image
              src={box3}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
            <Image
              src={box4}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
            <Image
              src={box5}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
            <Image
              src={box6}
              className="w-[350px] h-[250px] object-cover rounded-xl object-center"
            />
          </div>
        </div>

        <div className="my-10 text-center text-black" id="ajude">
          <h1 className="text-[2rem] font-bold">Como Você Pode Ajudar:</h1>
          <p className="lg:p-6 p-2 my-4 lg:w-7/12 mx-auto text-[1.2rem] font-thin ">
            Estamos sempre em busca de doações para garantir que possamos
            oferecer os melhores cuidados possíveis aos nossos residentes. Você
            pode ajudar de várias maneiras:
          </p>
          <div className="flex lg:flex-row flex-col items-center justify-center gap-10 px-3 text-left text-[1rem]">
            <div className="flex flex-col items-center justify-between h-[500px] text-center gap-4 lg:w-5/12">
              <Image
                src={anjos}
                className="lg:w-[200px] w-full h-[200px] object-cover rounded-[2rem]"
              />
              <p>
                <strong className="text-[1.5rem]">Doação financeira:</strong>
                <br></br> Qualquer quantia faz a diferença. Sua contribuição
                ajuda a cobrir despesas com alimentação, cuidados médicos e
                atividades recreativas.<br></br>
              </p>
              <h1 className="bg-[#ED5A06] cursor-text text-white px-4 rounded-lg text-[.9rem] py-6">
                <strong> Doe pelo Pix 16.923.245/0001-20</strong>
              </h1>
            </div>

            <div className="flex flex-col items-center justify-between h-[500px] text-center gap-4 lg:w-5/12">
              <Image
                src={masks}
                className="lg:w-[200px] w-full h-[200px] object-cover rounded-[2rem]"
              />
              <p>
                <strong className="text-[1.5rem]">Doação de tempo:</strong>
                <br></br> Se você puder dedicar seu tempo como voluntário, será
                uma dádiva inestimável para nossos idosos. Seja parte de sua
                jornada e compartilhe seu carinho.<br></br>
              </p>
              <h1 className="bg-[#ED5A06] cursor-text text-white px-4 rounded-lg text-[.9rem] py-4">
          
                <strong>
                  Rua Dom João Pimenta, 65 - Centro,<br></br> Montes Claros -
                  MG, 39400-003
                </strong>
              </h1>
            </div>

            <div className="flex flex-col items-center justify-between h-[500px] text-center gap-4 lg:w-5/12">
              <Image
                src={doe}
                className="lg:w-[200px] w-full h-[200px] object-cover rounded-[2rem]"
              />
              <p>
                <strong className="text-[1.5rem]">
                  Doação de suprimentos:
                </strong>
                <br></br> Aceitamos doações de alimentos, roupas, produtos de
                higiene e outros itens essenciais.
                <br></br>
              </p>
              <h1 className="bg-[#ED5A06] cursor-text text-white px-4 rounded-lg text-[.9rem] py-4">
                <strong>
                  Para mais informações entre em contato:<br></br>(38) 3221-1299
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
