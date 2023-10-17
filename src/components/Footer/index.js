import Link from 'next/link'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='bg-[#00303F] text-white w-full h-fit flex mt-10 items-center justify-center md:py-10 py-6 rounded-tl-[4rem]'>
      <div className='text-center'>
        <h1 className='text-center text-xl'>Apoie o Lar das Velhinhas</h1>
        <p className='my-3'>
          Sua generosidade é o que mantém o Lar das Velhinhas funcionando e proporcionando um lugar seguro e feliz para nossos residentes. Juntos, podemos fazer a diferença na vida de nossos idosos.</p> 
          <h1 className='font-extrabold text-xl'>
          Nossas Redes Sociais
            </h1>
          <div className='flex gap-10 items-center justify-center mt-2'>
            <Link href={"https://www.instagram.com/lardasvelhinhas/"} target='_blank'><FaInstagram size={28} color='#E4367D'/></Link>
            <Link href={"https://www.facebook.com/lardasvelhinhas/?locale=pt_BR"} target='_blank'><FaFacebook size={28} color='#4867AA'/></Link>
            </div>     
        </div>
    </div>
  )
}
