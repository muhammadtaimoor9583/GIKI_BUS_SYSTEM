const LoadingSpinner = ({ size = "md" }) => {
	const sizeClass = `loading-${size}`;

	return <div className="flex items-center justify-center w-[100%] h-svh">
		<span className={`loading loading-spinner ${sizeClass}`} />
	</div>;
};
export default LoadingSpinner;