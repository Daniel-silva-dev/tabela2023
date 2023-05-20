import React from 'react'
import { FaFutbol } from 'react-icons/fa'

function Header() {
  return (
    <div className='flex items-center justify-center mt-5 text-zinc-600 gap-2'>
      <FaFutbol size='1.3rem' color='black'/>  TABELA DO BRASILEIRÃO 2023 | ATUALIZADO EM 19/05/2023
    </div>
  )
}

export default Header