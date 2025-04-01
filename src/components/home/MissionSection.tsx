export default function MissionSection() {
  return (
    <section className="py-10 md:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 text-[#000080]">எங்கள் நோக்கம்</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-[#000080]">சமூக நீதி</h3>
            <p className="text-gray-700 text-sm sm:text-base">அனைவருக்கும் சமத்துவம் மற்றும் நீதி வழங்குவதே எங்கள் முதன்மை நோக்கம்.</p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-[#000080]">பொருளாதார வளர்ச்சி</h3>
            <p className="text-gray-700 text-sm sm:text-base">அனைத்து மக்களுக்கும் வேலைவாய்ப்பு மற்றும் பொருளாதார முன்னேற்றம்.</p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md sm:col-span-2 md:col-span-1 overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-[#000080]">கல்வி மேம்பாடு</h3>
            <p className="text-gray-700 text-sm sm:text-base">அனைவருக்கும் தரமான கல்வி கிடைப்பதை உறுதி செய்தல்.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
