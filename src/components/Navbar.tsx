import logo from "../components/logo 1.png"

const Navbar = () => {
    return (
        <nav className="bg-blue-950 text-white py-4 h-24 flex justify-center items-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-32 h-10" />
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search any things"
                            className="py-2 px-3 pr-12 w-96 h-14 bg-white text-gray-900 rounded-xl focus:outline-none ml-20"
                        />
                        <button className="w-32 h-14 absolute right-0 top-0 bg-yellow-400 hover:bg-yellow-500 py-2 px-4 rounded-xl">
                            Search
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="flex space-x-4">
                        <div className="flex">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7894 12C15.5509 12 17.7894 9.76142 17.7894 7C17.7894 4.23858 15.5509 2 12.7894 2C10.028 2 7.78943 4.23858 7.78943 7C7.78943 9.76142 10.028 12 12.7894 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.3794 22C21.3794 18.13 17.5294 15 12.7894 15C8.04943 15 4.19943 18.13 4.19943 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <li><a href="#" className="hover:text-gray-300">Sign in</a></li>
                        <div className="flex">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4094 20.81C13.0694 20.93 12.5094 20.93 12.1694 20.81C9.26943 19.82 2.78943 15.69 2.78943 8.69001C2.78943 5.60001 5.27943 3.10001 8.34943 3.10001C10.1694 3.10001 11.7794 3.98001 12.7894 5.34001C13.7994 3.98001 15.4194 3.10001 17.2294 3.10001C20.2994 3.10001 22.7894 5.60001 22.7894 8.69001C22.7894 15.69 16.3094 19.82 13.4094 20.81Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.789429" y="0.5" width="14.2105" height="15" rx="7.10526" fill="#EDA415" />
                                <path d="M5.48206 7.50421C5.48206 6.41789 5.6589 5.57158 6.01259 4.96526C6.36627 4.35263 6.98522 4.04632 7.86943 4.04632C8.74732 4.04632 9.36311 4.35263 9.7168 4.96526C10.0705 5.57158 10.2473 6.41789 10.2473 7.50421C10.2473 8.60947 10.0705 9.46842 9.7168 10.0811C9.36311 10.6937 8.74732 11 7.86943 11C6.98522 11 6.36627 10.6937 6.01259 10.0811C5.6589 9.46842 5.48206 8.60947 5.48206 7.50421ZM9.39469 7.50421C9.39469 6.95474 9.3568 6.49053 9.28101 6.11158C9.21153 5.72632 9.06311 5.41684 8.83574 5.18316C8.61469 4.94947 8.29259 4.83263 7.86943 4.83263C7.43995 4.83263 7.11153 4.94947 6.88417 5.18316C6.66311 5.41684 6.51469 5.72632 6.4389 6.11158C6.36943 6.49053 6.33469 6.95474 6.33469 7.50421C6.33469 8.07263 6.36943 8.54947 6.4389 8.93474C6.51469 9.32 6.66311 9.62947 6.88417 9.86316C7.11153 10.0968 7.43995 10.2137 7.86943 10.2137C8.29259 10.2137 8.61469 10.0968 8.83574 9.86316C9.06311 9.62947 9.21153 9.32 9.28101 8.93474C9.3568 8.54947 9.39469 8.07263 9.39469 7.50421Z" fill="white" />
                            </svg>
                        </div>
                        <li><a href="#" className="hover:text-gray-300">Sign in</a></li>
                        <div className="flex">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7894 12C15.5509 12 17.7894 9.76142 17.7894 7C17.7894 4.23858 15.5509 2 12.7894 2C10.028 2 7.78943 4.23858 7.78943 7C7.78943 9.76142 10.028 12 12.7894 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.3794 22C21.3794 18.13 17.5294 15 12.7894 15C8.04943 15 4.19943 18.13 4.19943 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.789429" y="0.5" width="14.2105" height="15" rx="7.10526" fill="#EDA415" />
                                <path d="M5.48206 7.50421C5.48206 6.41789 5.6589 5.57158 6.01259 4.96526C6.36627 4.35263 6.98522 4.04632 7.86943 4.04632C8.74732 4.04632 9.36311 4.35263 9.7168 4.96526C10.0705 5.57158 10.2473 6.41789 10.2473 7.50421C10.2473 8.60947 10.0705 9.46842 9.7168 10.0811C9.36311 10.6937 8.74732 11 7.86943 11C6.98522 11 6.36627 10.6937 6.01259 10.0811C5.6589 9.46842 5.48206 8.60947 5.48206 7.50421ZM9.39469 7.50421C9.39469 6.95474 9.3568 6.49053 9.28101 6.11158C9.21153 5.72632 9.06311 5.41684 8.83574 5.18316C8.61469 4.94947 8.29259 4.83263 7.86943 4.83263C7.43995 4.83263 7.11153 4.94947 6.88417 5.18316C6.66311 5.41684 6.51469 5.72632 6.4389 6.11158C6.36943 6.49053 6.33469 6.95474 6.33469 7.50421C6.33469 8.07263 6.36943 8.54947 6.4389 8.93474C6.51469 9.32 6.66311 9.62947 6.88417 9.86316C7.11153 10.0968 7.43995 10.2137 7.86943 10.2137C8.29259 10.2137 8.61469 10.0968 8.83574 9.86316C9.06311 9.62947 9.21153 9.32 9.28101 8.93474C9.3568 8.54947 9.39469 8.07263 9.39469 7.50421Z" fill="white" />
                            </svg>
                        </div>
                        <li><a href="#" className="hover:text-gray-300">Cart</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar
