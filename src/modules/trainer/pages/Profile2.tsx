const Profile2 = () => {
  const sombraDura = '4px 5px 0px 0px rgba(0, 0, 0, 0.90)';
  return (
    <div className="flex flex-col border-2 p-6 bg-[#FFF7E3]">
      <div className="flex gap-6 border">
        {/* TRAINER INFO */}
        <div className="flex flex-col w-2/3 ">
          <h2 className="text-4xl font-bold">Trainer info</h2>
          <div
            className={`
           p-6 
          bg-[#f7c436]
          border-2 border-black flex gap-4 h-full
        `}
            // Aplicas la sombra no difusa
            style={{ boxShadow: sombraDura }}
          >
            <div className="w-60 h-70">
              <img src="/profile-me.png" alt="author-image" className="border-2 cover" />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-bold mb-2">Mi Tarjeta Nítida</h2>
              <p className="text-gray-700">
                Esta tarjeta utiliza una sombra no difusa para un efecto "flotante" y elevado.
              </p>
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="flex flex-col w-1/3">
          <h2 className="text-xl font-semibold">Work experience</h2>
          <div className="">
            <div
              className={`
                p-4 
                bg-[#ffffff] 
                border-2 border-black 
                `}
              style={{ boxShadow: sombraDura }}
            >
              <h2 className="text-lg font-bold mb-2">Mi Tarjeta Nítida</h2>
              <p className="text-gray-700">Esta tarjeta utiliza una sombra no difusa.</p>
            </div>
            <div
              className={`
                p-4 
                bg-[#ffffff] 
                border-2 border-black -mt-[2px]
                `}
              style={{ boxShadow: sombraDura }}
            >
              <h2 className="text-lg font-bold mb-2">Mi Tarjeta Nítida</h2>
              <p className="text-gray-700">Esta tarjeta utiliza una sombra no difusa.</p>
            </div>
            <div
              className={`
                p-4 
                bg-[#ffffff] 
                border-2 border-black  -mt-[2px]
                `}
              style={{ boxShadow: sombraDura }}
            >
              <h2 className="text-lg font-bold mb-2">Mi Tarjeta Nítida</h2>
              <p className="text-gray-700">Esta tarjeta utiliza una sombra no difusa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
