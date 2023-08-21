import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-2">Company Name</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.5 3.75a.75.75 0 0 0-.75.75v5.25h-1.5V4.5h-1.5V3.75a.75.75 0 0 0-.75-.75H7.5a.75.75 0 0 0-.75.75v1.5H5.25v1.5h1.5v9.75h1.5V9h1.5V7.5h-1.5V4.5h2.25a.75.75 0 0 0 .75-.75V3.75zM9.75 7.5h1.5V9h-1.5V7.5zm0 4.5h1.5v4.5h-1.5v-4.5zm4.5 0h1.5v4.5h-1.5v-4.5zm0-4.5h1.5V9h-1.5V7.5zm0-6.75a.75.75 0 0 0-.75.75V3.75h-1.5V2.25h1.5V.75a.75.75 0 0 0 .75-.75h1.5a.75.75 0 0 0 .75.75v1.5h1.5v1.5h-1.5v1.5h-1.5V3.75a.75.75 0 0 0-.75-.75zm0 6.75h1.5v4.5h-1.5v-4.5z"
              ></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 10.125h-1.688c-.135-.01-.27.067-.36.207-.883 1.058-2.246 1.68-3.75 1.68-.608 0-1.2-.105-1.758-.315a2.02 2.02 0 0 1-.984-1.83V7.313c0-.135.043-.27.12-.384.075-.113.182-.206.31-.27.128-.065.27-.098.42-.098h1.692V5.437H8.25c-1.26 0-2.25.99-2.25 2.25v1.688c0 .135-.067.27-.207.36-.874.563-1.413 1.62-1.413 2.79 0 1.65 1.35 3 3 3h5.25V12h-1.5v-.375c0-1.65-1.35-3-3-3h-1.5V7.313c0-1.65 1.35-3 3-3h1.5v-.375c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25v1.688c0 .135-.067.27-.207.36-.874.563-1.413 1.62-1.413 2.79 0 .945.465 1.785 1.17 2.28.063.045.15.06.23.045h1.688v1.688z"
              ></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c2.754 0 4.95 2.196 4.95 4.95 0 2.754-2.196 4.95-4.95 4.95-2.754 0-4.95-2.196-4.95-4.95 0-2.754 2.196-4.95 4.95-4.95zm0 1.5a3.45 3.45 0 0 0-3.45 3.45c0 .897.34 1.705.897 2.313l-.007.008 1.897 1.897 3.563-3.563.007-.008a3.45 3.45 0 0 0 .897-2.313c0-1.908-1.542-3.45-3.45-3.45zm0 1.5a1.95 1.95 0 0 1 1.95 1.95c0 .51-.195.97-.513 1.323l-.007.008-.007.008-1.897 1.897-3.563-3.563.007-.008c.353-.318.814-.513 1.323-.513z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
