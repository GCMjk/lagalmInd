import Link from 'next/link';
import { UserAddIcon, PlusIcon, BanIcon } from '@heroicons/react/solid';

import { useQuery } from '@apollo/client';
import { GetUsersDocument, ResultUser } from '@service/graphql';

const Usuarios = () => {
  const { data } = useQuery(GetUsersDocument);
  const user = data?.users?.users;
  console.log(user);
  return (
    <>
      <h1 className="text-5xl text-gray-800 font-bold">Usuarios</h1>

      <div className="flex justify-end py-4">
        <button className="flex items-center bg-green-400 hover:bg-green-600 text-white font-bold text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          <UserAddIcon className="mr-2 h-4" />
          Agregar usuario
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {user?.map((user) => (
          <div
            className={
              'flex items-center justify-between px-6 py-2 bg-gray-100 rounded-lg shadow-sm ' +
              (user.role ? '' : 'opacity-60')
            }
            key={user.id}
          >
            <Link href={`/usuario/${user.id}`}>
              <a>{user.name}</a>
            </Link>
            <p>
              {user.name} {user.lastname}
            </p>
            <p>{user.email}</p>
            {user.role ? (
              <button className="py-2 px-4 text-white bg-red-300 hover:bg-red-400 rounded-full transition duration-700 ease-in-out">
                <BanIcon className="h-4" />
              </button>
            ) : (
              <button className="py-2 px-4 text-white bg-green-400 hover:bg-green-500 rounded-full transition duration-700 ease-in-out">
                <PlusIcon className="h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end py-4">
        <span className="flex items-center text-green-400 font-medium text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          Activos 1
        </span>
        <span className="flex items-center text-red-400 font-medium text-sm py-2 px-4 rounded-full transition duration-700 ease-in-out">
          Inactivos 1
        </span>
      </div>
    </>
  );
};

export default Usuarios;
