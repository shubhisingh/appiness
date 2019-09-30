import {userData, employeesData} from './data';
const DUMMY_LOGIN_DELAY = 2000;

export const checkLogin = (username, password) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(userData.username === username && userData.password === password) {
				resolve(true);
			} else if(userData.username !== username) {
				reject(new Error('Username is not valid'));
			} else {
				reject(new Error('Password does not match'));
			}
		}, DUMMY_LOGIN_DELAY);
	});
};
export const getEmployees = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(employeesData);
		}, DUMMY_LOGIN_DELAY);
	});
};