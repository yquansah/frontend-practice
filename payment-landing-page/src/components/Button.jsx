const Button = (props) => {
	return (
		<button className="bg-landing px-6 py-2 rounded-md">
			{props.text}
		</button>
	)
};

export default Button;