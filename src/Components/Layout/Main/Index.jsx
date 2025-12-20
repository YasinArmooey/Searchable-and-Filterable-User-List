import ModalOpener from "../../Modal/ModalOpener";

const Index = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div
        className="w-[90%] max-w-sm md:max-w-md p-5 bg-[#F9FAFB] 
      flex-col flex items-center gap-3 
      rounded-lg shadow-md"
      >
        {/* Text Message */}
        <section>
          <h1 className="text-2xl font-bold text-gray-800 md:mb-10 mb-5">
            Find Your Friends
          </h1>
        </section>
        {/* Search Modal opener */}       
          <ModalOpener />
      </div>
    </div>
  );
};

export default Index;
