
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 px-16 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: support@plantapp.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-500">Facebook</a>
                <a href="#" className="hover:text-green-500">Twitter</a>
                <a href="#" className="hover:text-green-500">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg text-black" />
                <button className="bg-green-500 px-4 py-2 rounded-r-lg">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p>© 2024 Plant App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;