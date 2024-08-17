import { userContext } from '@/context/UserContext'
import { getAllUsers } from '@/services/auth.service'
import React, { useContext, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

const GetAllUsers = () => {

  const { token } = useContext(userContext)
  const [apiUser, setApiUser] = useState([])
  const [localLoading, setlocalLoading] = useState(true)

  useEffect(() => {

    const getUsers = async () => {
      try {
        let response = await getAllUsers(token)
        setApiUser(response.data)
        setTimeout(() => {
          setlocalLoading(false)
        }, 2000);
        console.log(response)
      } catch (error) {
        alert(error.message)
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
        localLoading ? (<>
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

                {}
                  (<>
                    <h1>no users in the data base</h1>
                  </>)}
            </div>)
      }
    </>
  )
}

export default GetAllUsers