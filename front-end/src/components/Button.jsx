const Button = ({ title, bgColor, txtColor = "text-white", onClick }) => (
	<button
		type="button"
		className={`${bgColor} text-sm md:text-base ${txtColor} px-5 md:px-10 py-2 md:py-3`}
		onClick={onClick}
	>
		{title}
	</button>
);

export default Button;
