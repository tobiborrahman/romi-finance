import React from 'react';
import logo from '../../../src/assets/romi-financs.png';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center bg-[#191919] text-gray-300 px-7 drop-shadow-lg">
			<div className="flex justify-center items-center">
				<img className="w-16 h-16 mr-0" src={logo} alt="" />
				<h3 className="ml-0 text-2xl ">Romi Finance</h3>
			</div>
			<div>
				<nav>
					<ul className="flex justify-center items-center gap-9 mx-5">
						<li>Home</li>
						<li>Dashboard</li>
						<li>NFT</li>
						<li>Earn</li>
						<li>Buy</li>
						<li>Referrals</li>
						<li>Ecosystem</li>
						<li>About</li>
					</ul>
				</nav>
			</div>
			<div className="flex justify-between items-center">
				<div>
					<button className="py-2 px-3 rounded-md text-white bg-[#3EB489] hover:bg-[#207A59]">
						Trade
					</button>
				</div>
				<div className="flex border border-gray-700 rounded-md hover:bg-[#2A2A2A] justify-between items-center py-2 px-4 mx-4">
					<img
						className="mr-6"
						src="https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg"
						alt=""
					/>
					<p className="pr-2 leading-none">
						Connect <br /> <span className="ml-2">Wallet</span>
					</p>
				</div>
				<div className="flex justify-center items-center border-[0.2px] border-gray-700 rounded-md hover:bg-[#2A2A2A] py-[6px] px-4 mr-6">
					<img
						src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg"
						alt=""
					/>
					<div className="w-[2px] h-[20px] px-2"></div>
					<p>
						<BsThreeDotsVertical />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
