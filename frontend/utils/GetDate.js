export const formatPostDate = (createdAt) => {
	const currentDate = new Date();
	const createdAtDate = new Date(createdAt);

	const timeDifferenceInSeconds = Math.floor((currentDate - createdAtDate) / 1000);
	const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
	const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
	const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);

	if (timeDifferenceInDays > 1) {
		return createdAtDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
	} else if (timeDifferenceInDays === 1) {
		return "1d";
	} else if (timeDifferenceInHours >= 1) {
		return `${timeDifferenceInHours}h`;
	} else if (timeDifferenceInMinutes >= 1) {
		return `${timeDifferenceInMinutes}m`;
	} else {
		return "Just now";
	}
};

export const formatMemberSinceDate = (createdAt) => {
	const date = new Date(createdAt);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `Joined ${month} ${year}`;
};

export const getFormatedDate=(createdAt)=>{
const date = new Date(createdAt);

const day=date.getDay();
let month = date.getMonth();
month=month<10 ? `0${month}` : month;
const year = date.getFullYear();
return `${day}/${month}/${year}`;
};
export const getFormatedTime=(createdAt)=>{
const date = new Date(createdAt);



let hours=date.getHours();
let min = date.getMinutes();
const AmPm=hours>12 ? 'Pm' : 'Am';
hours=hours> 12 ? (hours % 12) : hours;
hours=hours<10 ? `0${hours}` : hours;
return `${hours}:${min} ${AmPm}`;
};

