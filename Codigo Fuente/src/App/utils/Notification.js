import { notification } from "antd";

export const openNotificationWithIcon = (type,message,duration) => {
	notification[type]({
		message: `${type}:`,
		description: `${ message.toString()}`,
		duration:duration
	});
};

export const success = (text,duration) => {
	openNotificationWithIcon('success',text);
}

export const error = (text,duration) => {
	openNotificationWithIcon('error', text);
}

export const warning  = ( text,duration ) => {
	openNotificationWithIcon('warning', text)
}
