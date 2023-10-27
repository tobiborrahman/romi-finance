import React from 'react';

const Body = () => {
	return (
		<div className=" bg-[#191919] px-10 text-white">
			<div className="flex justify-between items-center py-20">
				<div className="w-[310px]">
					<div className="flex items-center  mb-2">
						<img
							src="https://zomi.finance/static/media/ic_liquidity.505b3f30.svg"
							alt=""
						/>
						<h4 className="text-xl font-semibold ml-4">
							Reduce Liquidation Risks
						</h4>
					</div>
					<p className="text-lg">
						An aggregate of high-quality price feeds determine when
						liquidations occur. This keeps positions safe from
						temporary wicks.
					</p>
				</div>
				<div className="w-[310px]">
					<div className="flex items-center  mb-2">
						<img
							src="https://zomi.finance/static/media/ic_cost.b4a729d3.svg"
							alt=""
						/>
						<h4 className="text-xl font-semibold ml-4">
							Save on Costs
						</h4>
					</div>
					<p className="text-lg">
						Enter and exit positions with minimal spread and zero
						price impact. Get the optimal price without incurring
						additional costs.
					</p>
				</div>
				<div className="w-[310px]">
					<div className="flex items-center mb-2">
						<img
							src="https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg"
							alt=""
						/>
						<h4 className="text-xl font-semibold ml-4">
							Simple Swaps
						</h4>
					</div>
					<p className="text-lg">
						Open positions through a simple swap interface.
						Conveniently swap from any supported asset into the
						position of your choice.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Body;
