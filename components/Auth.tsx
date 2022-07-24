import { FC, FormEvent, useState } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { UseMutateAuth } from '../hooks/UseMutateAuth'

export const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = UseMutateAuth()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      loginMutation.mutate()
    } else {
      registerMutation.mutate()
    }
  }
  return (
    <>
      <ShieldCheckIcon className="mb-8 h-12 w-12 text-blue-500" />
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            required
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="">
          <input
            type="password"
            required
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
      </form>
    </>
  )
}
