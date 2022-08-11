import { saveAs } from "file-saver";

const Presentation = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            Descarga nuestra catálogo - Download our brochure
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => downloadEs()}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-paragraph hover:bg-paragraph/40 hover:border-transparent transition-all duration-300"
            >
              Español
            </button>
          </div>
          <div className="ml-3 inline-flex">
            <button
              onClick={() => downloadEn()}
              className="inline-flex items-center justify-center px-5 py-3 border border-paragraph text-base font-medium rounded-md text-paragraph bg-white hover:text-white hover:bg-paragraph/40 hover:border-transparent transition-all duration-300"
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
