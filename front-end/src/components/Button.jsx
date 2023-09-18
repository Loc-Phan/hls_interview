const Button = ({ title, bgColor, txtColor = "text-white", onClick }) => (
	<button
		type="button"
		className={`${bgColor} text-sm md:text-base ${txtColor} px-5 md:px-10 py-2 hover:opacity-90`}
		onClick={onClick}
	>
		{title}
	</button>
);

export default Button;
