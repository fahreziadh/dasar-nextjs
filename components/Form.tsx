import React from 'react'

export default function Form({value,onChange}:Props) {
  return (
    <input placeholder='Cari user di github'
     className='border border-zinc-100 p-[20px] rounded-[8px] w-full'
     value={value}
     onChange={onChange}
     />
  )
}

interface Props{
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

