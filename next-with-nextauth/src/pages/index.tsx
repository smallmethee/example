import React from "react"
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { GetServerSidePropsContext } from "next"
import { LockClosedIcon } from "@heroicons/react/solid"

const IndexPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='flex flex-col h-screen items-center'>
        <text>
          Signed in as {JSON.stringify(session)} <br />
        </text>
        <div className='m-auto'>
          <button
            onClick={() => signOut()}
            className='group  relative w-96 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <LockClosedIcon
                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                aria-hidden='true'
              />
            </span>
            Sign out
          </button>
        </div>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context
  const session = await getSession({ req })
  if (session) {
    return {
      props: { session },
    }
  }
  return {
    redirect: {
      destination: "/signin",
      permanent: false,
    },
  }
}

export default IndexPage
