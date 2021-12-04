import { v4 as uuidv4 } from 'uuid';

export const addUniqueId = (data = []) => {
	return data.map(item => ({...item, uId: uuidv4()}))
}