import { saveAs } from "file-saver";

const Presentation = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Puedes descargar nuestra presentacion</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => downloadEs()}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Español
            </button>
          </div>
          <div className="ml-3 inline-flex">
            <button
              onClick={() => downloadEn()}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const downloadEs = () => {
  saveAs("/Presentacion_2022_Es.pdf", "LagalmES-2022.pdf");
};

const downloadEn = () => {
  saveAs("/Presentation_2022_En.pdf", "LagalmEN-2022.pdf");
};

export default Presentation;
