/* This code snippet is a React component called `GetAllUsers`. Here's a breakdown of what it does: */
import { userContext } from '@/context/UserContext'
import { getAllUsers } from '@/services/auth.service'
import React, { useContext, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* This `GetAllUsers` component in React is responsible for fetching all users from the server and
displaying them in a table format. Here's a breakdown of what the code does: */
const GetAllUsers = () => {

 /* The line `const { token, role } = useContext(userContext)` in the `GetAllUsers` component is using
 the `useContext` hook in React to access the values stored in the `userContext`. */
  const { token, role } = useContext(userContext)
 /* `const [apiUser, setApiUser] = useState([])` is a React state declaration using the `useState`
 hook. */
  const [apiUser, setApiUser] = useState([])
 /* The line `const [localLoading, setlocalLoading] = useState(true)` in the `GetAllUsers` component is
 declaring a state variable called `localLoading` using the `useState` hook in React. */
  const [localLoading, setlocalLoading] = useState(true)

  /* The `useEffect` hook in the `GetAllUsers` component is used to perform side effects in function
  components in React. In this specific case, the `useEffect` hook is responsible for fetching all
  users from the server when the component mounts. */
  useEffect(() => {

    const getUsers = async () => {
     /* This block of code is handling the asynchronous operation of fetching all users from the
     server. Here's a breakdown of what it does: */
      try {
        // /* The code `toast.info('Awaiting server response...', { /* options */ });` is displaying an
        // informational toast message using the `react-toastify` library. Here's a breakdown of the
        // options being passed to the `toast.info` method: */
        
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
        /* `let response = await getAllUsers(token)` is making an asynchronous call to the
        `getAllUsers` function from the `auth.service` service, passing the `token` as a parameter.
        The `await` keyword is used to wait for the asynchronous operation to complete and then
        store the response from the server in the `response` variable. This response likely contains
        data about all the users fetched from the server. */
        let response = await getAllUsers(token)
        /* `setApiUser(response.data)` is updating the state variable `apiUser` in the `GetAllUsers`
        component with the data received from the server response. This means that the `apiUser`
        state will now contain the array of users fetched from the server, allowing the component to
        render and display this data in the table format within the React component. */
        setApiUser(response.data)
        // /* The code `toast.success('Users Found', { /* options */ });` is displaying a success toast
        // message using the `react-toastify` library. Here's a breakdown of the options being passed
        // to the `toast.success` method: */
        
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
        /* The `setTimeout(() => { setlocalLoading(false) }, 2000);` code snippet is setting a timeout
        function in JavaScript. Here's what it does: */
        setTimeout(() => {
          setlocalLoading(false)
        }, 2000);

      } catch (error) {
      //  /* The `toast.error(`Error getting all users${error.message}`, { /* options */ });` code snippet
      //  is displaying an error toast message using the `react-toastify` library. Here's a breakdown
      //  of the options being passed to the `toast.error` method: */
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
    /* `getUsers()` is an asynchronous function within the `GetAllUsers` React component. It is
    responsible for fetching all users from the server by making an API call to the `getAllUsers`
    function from the `auth.service` service. */
    getUsers()
  }, [])

  /* The code `const usersWithId = apiUser.filter(user => {
      return user.first_name
    })` is filtering the `apiUser` array to only include users that have a truthy `first_name`
  property. */
  const usersWithId = apiUser.filter(user => {
    return user.first_name
  })
  return (
    <>

      /* This block of code within the `GetAllUsers` component is responsible for conditional rendering
      based on the values of `localLoading` and `role`. Here's a breakdown of what it does: */
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