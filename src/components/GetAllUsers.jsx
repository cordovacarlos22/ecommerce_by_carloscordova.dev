import { userContext } from '@/context/UserContext'
import { getAllUsers } from '@/services/auth.service'
import React, { useContext, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetAllUsers = () => {

  const { token,role } = useContext(userContext)
  const [apiUser, setApiUser] = useState([])
  const [localLoading, setlocalLoading] = useState(true)

  useEffect(() => {

    const getUsers = async () => {
      try {
        toast.info('Awaiting server response...', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        let response = await getAllUsers(token)
        setApiUser(response.data)
        toast.success('Users Found', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
        setTimeout(() => {
          setlocalLoading(false)
        }, 2000);
       
      } catch (error) {
        toast.error(`Error getting all users${error.message}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
    }
    getUsers()
  }, [])

  const usersWithId = apiUser.filter(user => {
    return user.first_name
  })
  return (
    <>

      {
        localLoading && role == 'ADMIN' ? (<>
          <LoadingSpinner />

        </>) :
          (
            <div>
              <h1 className="text-2xl font-bold  m-auto ">All Users list</h1>
              {/* List of all users */}
              {usersWithId.length > 0 && usersWithId != null ? (
                <>


                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            First Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            role
                          </th>
                          <th scope="col" className="px-6 py-3">
                            email
                          </th>
                          <th scope="col" className="px-6 py-3">
                            gender
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {usersWithId.map((user) => {
                          return (

                            <tr
                              key={user._id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {user.first_name}
                              </th>
                              <td className="px-6 py-4">{user.role}</td>
                              <td className="px-6 py-4">{user.email}</td>
                              <td className="px-6 py-4">{user.gender}</td>
                            </tr>

                          )
                        })}

                      </tbody>
                    </table>
                  </div>


                </>) :

                  (<>
                  <section
                    className='w-screen min-h-screen m-2 p-2 flex flex-col justify-center items-center'
                  >
                    <h1
                      className='text-lg font-bold animate-pulse '
                    >You are not authorized to access list all users</h1>
                    <span>Only Admin's can get all users</span>
                  </section>
                  </>)}
            </div>)
      }
      <ToastContainer />
    </>
  )
}

export default GetAllUsers