import Map from "./Map";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0 ml-4 md:ml-0">
          <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 mb-2">1615 Dundas St East, Whitby ON L1N2H1</p>
          <p className="text-gray-400 mb-2">Phone: 416-500-5770</p>
          <p className="text-gray-400">Email: contact@crownroadside.ca</p>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Map />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
