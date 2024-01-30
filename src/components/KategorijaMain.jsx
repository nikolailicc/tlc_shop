import Tastatura from '../assets/features/tastatura.jpeg';

const KategorijaMain = () => {
  return (
    <div className="mb-10">
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center">
        <input
          type="text"
          className="border border-[#111] p-2 mb-2 sm:mb-0 md:mb-0 rounded-lg w-80 sm:w-96 md:w-112 lg:w-1/3 xl:w-1/3"
          placeholder="Pretražite..."
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-[#111] text-white rounded-lg cursor-pointer h-full
       transition-all duration-200 ease-in-out transform scale-100
       hover:bg-white hover:border-2 hover:border-[#111] hover:text-black hover:scale-105"
        >
          Pretraži
        </button>
      </div>

      <div className="mx-auto w-full grid px-12 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 grid-auto-rows-auto">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className="h-80 mt-10 transition-transform cursor-pointer hover:scale-105 transform-gpu"
          >
            <div className="max-w-lg rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={Tastatura}
                alt={`Product ${index + 1}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Product Title</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategorijaMain;
