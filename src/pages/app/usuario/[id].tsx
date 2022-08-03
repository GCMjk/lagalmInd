import Image from 'next/image';

import DetailUser from '@components/DetailUser';

const Usuario = () => {
  return (
    <div className="container bg-white rounded-md shadow p-5">
      {/* <div className="flex justify-center mb-5">
        <Image
          src={`https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM`}
          className="rounded-md"
          height={200}
          width={200}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <DetailUser title="No. Empleado">
          <p> {user?.name} </p>
        </DetailUser>

        <DetailUser title="Nombre">
          <p>
            {' '}
            {user?.name} {user?.lastname}{' '}
          </p>
        </DetailUser>

        <DetailUser title="Correo">
          <p> {user?.email} </p>
        </DetailUser>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <DetailUser title="Telefono">
          <p> {user?.phone} </p>
        </DetailUser>

        <DetailUser title="Fecha de nacimiento">
          <p> {user?.birthday} </p>
        </DetailUser>

        <DetailUser title="CURP">
          <p> {user?.phone} </p>
        </DetailUser>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DetailUser title="Puesto">
          <p> {user?.birthday} </p>
        </DetailUser>

        <DetailUser title="Cargo">
          <p> {user?.email} </p>
        </DetailUser>
      </div>

      <DetailUser title="Descripción">
        <p> {user?.lastSession} </p>
      </DetailUser> */}
    </div>
  );
};

export default Usuario;
