import Image from "next/image";
import Link from "next/link";
import igreja from "../../../public/igreja.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-[#F0E7E3] w-full h-full flex mt-10 items-center lg:items-start lg:text-left text-center justify-between ">
      <div className="py-10 flex flex-col gap-6 lg:pl-8 w-full h-full justify-between lg:w-3/5 text-xl">
        <h1 className=" text-2xl font-bold">Apoie o Lar das Velhinhas</h1>
        <p className="my-3 lg:w-3/4">
          Sua generosidade é o que mantém o Lar das Velhinhas funcionando e
          proporcionando um lugar seguro e feliz para nossos residentes. Juntos,
          podemos fazer a diferença na vida de nossos idosos.
        </p>
        <h1 className="text-2xl font-bold">Endereço:</h1>
        <p>Rua Dom João Pimenta, 65 - Centro, Montes Claros - MG, 39400-003</p>
        <h1 className="text-2xl font-bold">Telefone:</h1>
        <p>(38) 3221-1299</p>
        <h1 className="font-extrabold text-2xl">Nossas Redes Sociais</h1>
        <div className="flex gap-10 items-center lg:justify-start justify-center mt-8">
          <Link
            href={"https://www.instagram.com/lardasvelhinhas/"}
            target="_blank"
          >
            <FaInstagram size={40} color="#E4367D" />
          </Link>
          <Link
            href={"https://www.facebook.com/lardasvelhinhas/?locale=pt_BR"}
            target="_blank"
          >
            <FaFacebook size={40} color="#4867AA" />
          </Link>
        </div>
      </div>
      <div className="h-full hidden lg:flex object-cover">
        <Image src={igreja} />
      </div>
    </div>
  );
}
