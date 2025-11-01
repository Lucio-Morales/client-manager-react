const ClientsPage = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 bg-white h-full">
      <h2 className="text-xl font-medium text-zinc-800 mb-6">Rutinas</h2>
      <section className="flex flex-wrap justify-start gap-6 ">
        <div className="border border-gray-200 w-40 h-32 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200">
          <span className="text-3xl">➕</span> {/* Icono (placeholder) */}
          <p className="text-sm font-semibold mt-2 text-center text-zinc-600">Crear nueva rutina</p>
        </div>
        <div className="border border-gray-200 w-40 h-32 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200">
          <span className="text-3xl">📋</span> {/* Icono sugerido: Portapapeles/Lista */}
          <p className="text-sm font-semibold mt-2 text-center text-zinc-600">Todas tus rutinas</p>
        </div>
        <div className="border border-gray-200 w-40 h-32 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200">
          <span className="text-3xl">📁</span> {/* Icono (placeholder) */}
          <p className="text-sm font-semibold mt-2 text-center text-zinc-600">Tus plantillas</p>
        </div>
        {/* <div className="border border-gray-200 w-40 h-32 flex flex-col items-center justify-center p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-200">
          <span className="text-3xl">🔍</span>
          <p className="text-sm font-semibold mt-2 text-center text-zinc-600">Biblioteca de Ejercicios</p>
        </div> */}
      </section>
    </div>
  );
};

export default ClientsPage;
