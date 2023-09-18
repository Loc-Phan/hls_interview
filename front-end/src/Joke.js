import { useState } from "react";
import { JOKES } from "@/constants";
import Button from "@/components/Button";

const Joke = () => {
	const [currentJoke, setCurrentJoke] = useState(0);
	const handleJoke = () => {
		if (currentJoke === JOKES.length - 1) {
			setCurrentJoke(-1);
			return;
		}
		setCurrentJoke(currentJoke + 1);
	};

	return (
		<div className="flex-1">
			<div className="flex flex-col justify-center bg-green py-12 md:py-16 text-center">
				<p className="mb-4 md:mb-6 text-lg md:text-4xl text-white font-semibold">
					A joke a day keeps the docter away
				</p>
				<p className="text-xs text-white1 font-medium">
					If you joke wrong away, your teeth have to pay. (Serious)
				</p>
			</div>
			{currentJoke === -1 ? (
				<p className="text-sm md:text-base font-normal h-80 py-10 text-center">
					That's all the jokes for today! Come back another day!
				</p>
			) : (
				<div className="flex flex-col items-center container-md max-w-3xl px-6 lg:px-0 md:h-80">
					<div className="pt-10 h-72 md:h-48">
						<p className="text-sm md:text-base font-normal">
							{JOKES[currentJoke]}
						</p>
					</div>
					<div className="hidden lg:block w-1/2 h-[1px] bg-neutral1" />
					<div className="flex gap-10 justify-center py-10">
						<Button
							title="This is funny!"
							bgColor="bg-blue"
							onClick={handleJoke}
						/>
						<Button
							title="This is not funny!"
							bgColor="bg-green"
							onClick={handleJoke}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Joke;
