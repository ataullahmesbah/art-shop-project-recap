import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-gray-500 p-3  ">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-lg">
                    Art Shop
                </div>
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">Shop</a>
                    <a href="#" className="text-white">Projects</a>
                    <a href="#" className="text-white">Services & Parts</a>
                    <a href="#" className="text-white">Dashboard</a>
                </div>
                <div className="lg:hidden">
                    {/* Mobile menu icon */}
                    <button className="text-white">
                        <FaUser />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
