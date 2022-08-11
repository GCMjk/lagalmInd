import Image from "next/image";

const Products = () => {
  const products = [
    {
      id: 1,
      imageSrc:
        "https://res.cloudinary.com/lagalm/image/upload/v1660179583/lagalm_7_k6anpy.jpg",
    },
    {
      id: 2,
      imageSrc:
        "https://res.cloudinary.com/lagalm/image/upload/v1660179584/lagalm_8_wfjzfr.jpg",
    },
    {
      id: 3,
      imageSrc:
        "https://res.cloudinary.com/lagalm/image/upload/v1660179583/lagalm_10_olupwj.jpg",
    },
    {
      id: 4,
      imageSrc:
        "https://res.cloudinary.com/lagalm/image/upload/v1660179585/lagalm_9_w8fmtg.jpg",
    },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
          Algunos de nuestoros productos
        </h2>

        <p className="text-xl">
          Experiencia en el manejo y procesamiento de resinas de ingenieria
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:grid-cols-4 xl:gap-x-2 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3"
            >
              <Image
                height={200}
                width={300}
                src={product.imageSrc}
                alt="Productos Lagalm"
                className="object-center object-cover group-hover:opacity-75"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
