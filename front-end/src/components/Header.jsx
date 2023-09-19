const Header = () => (
	<div className="flex flex-row justify-between items-center w-full container-md px-6 xl:px-0 h-[4.5rem]">
		<img className="h-10 md:h-12 w-10 md:w-12" src="/hls.png" alt="joke-logo" />
		<div className="flex items-center">
			<div className="mr-2 md:mr-3 text-right">
				<p className="text-xs md:text-sm italic">Handicrafted by</p>
				<p className="text-xs md:text-sm font-medium">Jim HLS</p>
			</div>
			<img
				className="h-10 md:h-12 w-10 md:w-12 rounded-full"
				src="/user.png"
				alt="joke-logo"
			/>
		</div>
	</div>
);

export default Header;
