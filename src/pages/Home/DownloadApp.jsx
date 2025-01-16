import {FaDownload } from 'react-icons/fa';
const DownloadApp = () => {
    return (
        <div>
            <section className="py-12 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Download Our App</h2>
          <p className="mb-8">Get started with plant care today!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-500 px-6 py-3 rounded-lg flex items-center">
              <FaDownload className="mr-2" /> App Store
            </button>
            <button className="bg-white text-green-500 px-6 py-3 rounded-lg flex items-center">
              <FaDownload className="mr-2" /> Google Play
            </button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default DownloadApp;