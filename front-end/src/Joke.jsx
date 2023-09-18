import { useState } from "react";
import { JOKES } from "@/constants";
import Button from "@/components/Button";
import useCookie from "./hooks/useCookie";

const Joke = () => {
	const [loading, setLoading] = useState(false);
	const [currentJoke, setCurrentJoke] = useCookie("joke", []);

	const handleJoke = async (value) => {
		setLoading(true);
		try {
			// record the vote in database use fakeapi
			const res = await fetch(process.env.REACT_APP_API_KEY, {
				method: "POST",
				body: JSON.stringify({
					id: currentJoke.length,
					value,
				}),
			});
			if (res.status === 200) {
				// use cookie to track if a user has voted for a joke
				setCurrentJoke([...currentJoke, { id: currentJoke.length, value }]);
			}
		} catch (e) {
			// console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex-1">
			{loading && (
				<div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-black opacity-40 z-20">
					<div className="loader" />
				</div>
			)}
			<div className="flex flex-col justify-center bg-green py-12 md:py-16 text-center">
				<p className="mb-4 md:mb-6 text-lg md:text-4xl text-white font-semibold">
					A joke a day keeps the docter away
				</p>
				<p className="text-xs text-white1 font-medium">
					If you joke wrong away, your teeth have to pay. (Serious)
				</p>
			</div>
			{currentJoke.length === JOKES.length ? (
				<p className="text-sm md:text-base font-normal h-80 py-10 text-center">
					That's all the jokes for today! Come back another day!
				</p>
			) : (
				<div className="flex flex-col items-center container-md max-w-3xl px-6 lg:px-0 md:h-80">
					<div className="pt-10 h-72 md:h-48">
						<p className="text-sm md:text-base font-normal">
							{JOKES[currentJoke.length]}
						</p>
					</div>
					<div className="hidden lg:block w-1/2 h-[1px] bg-neutral1" />
					<div className="flex gap-10 justify-center mt-10">
						<Button
							title="This is funny!"
							bgColor="bg-blue"
							onClick={() => handleJoke(1)}
						/>
						<Button
							title="This is not funny!"
							bgColor="bg-green"
							onClick={() => handleJoke(0)}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Joke;
