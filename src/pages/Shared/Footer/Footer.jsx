

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8 p-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Art Shop</h2>
          <p className="text-sm">Your tagline or a brief description of your art shop.</p>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col mb-4 lg:mb-0">
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4">
            {/* Add your social media icons here */}
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Art Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
