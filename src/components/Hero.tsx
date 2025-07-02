
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-800 to-red-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Where Purpose
            <br />
            Meets Passion
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Discover your calling at Hamline University, where academic excellence meets personal growth in the heart of Saint Paul, Minnesota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              Visit Campus
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-800 transition-colors">
              Request Info
            </button>
          </div>
        </div>
      </div>
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" 
           style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K')"}}></div>
    </section>
  );
};

export default Hero;
