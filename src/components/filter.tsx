'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Input } from './ui/input'

export function Filter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [name, setName] = useState('')

  const page = searchParams.get('_page') || '1'

  router.replace(`?_page=${page}&name=${name}`)

  return (
    <Input
      placeholder='busque por um medicamento ou um laboratório...'
      className='mb-6 mt-6 max-w-[500px]'
      onChange={(e) => setName(e.target.value)}
    />
  )
}
