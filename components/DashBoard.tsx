import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { LogoutIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { supabase } from '../utils/supabase'
import { Spinner } from './Spinner'
import { UserProfile } from './UserProfile'

export const DashBoard: FC = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <>
      <LogoutIcon
        className="my-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={signOut}
      />
      <div className="item-center flex flex-col">
        <ErrorBoundary
          fallback={
            <ExclamationCircleIcon className="my-5 h-10 w-10 text-pink-500" />
          }
        >
          <Suspense fallback={<Spinner />}>
            <UserProfile />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}
