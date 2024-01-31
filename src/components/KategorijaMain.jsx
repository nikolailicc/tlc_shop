import Tastatura from '../assets/features/tastatura.jpeg';

const KategorijaMain = (props) => {
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
      {
        props.catContent.length !== 0 ? (
      <div className="mx-auto w-full grid px-12 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 grid-auto-rows-auto">
         {Object.keys(props.catContent).map((key, index) => (
            <div
            key={index}
            className="h-80 mt-10 transition-transform cursor-pointer hover:scale-105 transform-gpu"
            >
              <div className="max-w-lg border rounded-xl overflow-hidden shadow-lg h-[23rem]">
                <img
                  className="w-full max-h-[150px] object-contain"
                  src={props.catContent[key].slika_url}
                  alt={`Product ${index + 1}`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{props.catContent[key].ime_proizvoda}</div>
                  <p className='font-bold text-l mb-2'>{props.catContent[key].cijena}</p>
                  <p className="text-gray-700 text-base">
                    {props.catContent[key].opis_proizvoda.slice(0, 151)}
                    {props.catContent[key].opis_proizvoda.length >= 151 ? '...' : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        
      </div>) : (<div className='h-[32.5rem]'>
        <h1 className='font-semibold text-3xl pb-16 text-center flex justify-center mt-10'>Nema traženih rezultata</h1>
      </div>)
      }
    </div>
  );
};

export default KategorijaMain;
