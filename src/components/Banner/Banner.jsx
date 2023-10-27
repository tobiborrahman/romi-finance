import React from 'react';

const Banner = () => {
	return (
		<>
			<div className="py-20 bg-[#191919] px-10 text-white">
				<div>
					<h1 className="text-6xl font-bold">
						Decentralized <br /> Perpetual Exchange
					</h1>
					<p className="py-5 text-xl leading-6">
						Trade BTC, ETH, AVAX and other top <br />{' '}
						cryptocurrencies with up to 30x leverage <br /> directly
						from your wallet
					</p>
					<button className="py-2 px-3 font-semibold rounded-md text-white bg-[#3EB489] hover:bg-[#207A59]">
						Launch Exchange
					</button>
				</div>
				<div className="flex justify-between items-center pt-20">
					<div className="flex justify-left w-[370px] items-center border border-gray-800 py-7 rounded-md">
						<div className="px-10">
							<img
								src="https://zomi.finance/static/media/ic_trading.2c53815a.svg"
								alt=""
							/>
						</div>
						<div>
							<p className="">Total Trending Value</p>
							<h3 className="text-3xl font-semibold">$0</h3>
						</div>
					</div>
					<div className="flex justify-left w-[370px] items-center border border-gray-800 py-7 pr-24 rounded-md">
						<div className="px-10">
							<img
								src="https://zomi.finance/static/media/ic_stats.f0a18011.svg"
								alt=""
							/>
						</div>
						<div>
							<p className="">Open Interest</p>
							<h3 className="text-3xl font-semibold">$0</h3>
						</div>
					</div>
					<div className="flex justify-left w-[370px] items-center border border-gray-800 py-7 pr-24 rounded-md">
						<div className="px-10">
							<img
								src="https://zomi.finance/static/media/ic_totaluser.ae09b310.svg"
								alt=""
							/>
						</div>
						<div>
							<p className="">Total User</p>
							<h3 className="text-3xl font-semibold">0</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="border-b border-gray-700"></div>
		</>
	);
};

export default Banner;
