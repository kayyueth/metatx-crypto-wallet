import React from 'react';
import { Link } from 'react-router-dom';
import GenerateIcon from '../icons/GenerateIcon';
import ImportIcon from '../icons/ImportIcon';
import TransferIcon from '../icons/TransferIcon';

function BottomNav() {
    return (
        <footer className="bg-nav-color p-4 text-center flex justify-around fixed bottom-0 left-0 w-full">
            <Link 
                to="/generate" 
                className="flex flex-col items-center text-gray-800"
            >
                <div className="w-6 h-6 mb-3">
                    <GenerateIcon />
                </div>
                <span>GENERATE</span>
            </Link>

            <Link 
                to="/import" 
                className="flex flex-col items-center text-gray-800"
            >
                <div className="w-6 h-6 mb-3">
                    <ImportIcon />
                </div>
                <span>IMPORT</span>
            </Link>

            <Link 
                to="/transfer" 
                className="flex flex-col items-center text-gray-800"
            >
                <div className="w-6 h-6 mb-3">
                    <TransferIcon />
                </div>
                <span>TRANSFER</span>
            </Link>
        </footer>
    );
}


export default BottomNav;
