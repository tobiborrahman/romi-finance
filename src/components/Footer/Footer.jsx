import React from 'react';
import logo from '../../../src/assets/romi-financs.png';
import { BsMedium, BsGithub, BsTelegram, BsDiscord } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className="flex items-center justify-center bg-[#151515] border-t">
			<div className="text-center text-white">
				<div className="flex items-center text-white ml-16 py-6">
					<img className="w-20 h-20 " src={logo} alt="" />
					<h3 className="text-3xl">Romi Finance</h3>
				</div>
				<div className="ml-[80px] pb-8">
					<ul className="flex items-center gap-10 text-3xl">
						<li>
							<BsMedium />
						</li>
						<li>
							<BsGithub />
						</li>
						<li>
							<BsTelegram />
						</li>
						<li>
							<BsDiscord />
						</li>
					</ul>
				</div>
				<div className="flex gap-5 py-2 text-xl">
					<h5>Terms and Conditions</h5>
					<h5>Referral Terms</h5>
					<h5>Media Kit</h5>
				</div>
			</div>
		</div>
	);
};

export default Footer;
