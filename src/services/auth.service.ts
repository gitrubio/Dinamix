import {  UserCollectionRef } from '../firebase/providers'
import { ResponseService } from '../interfaces/api.interface'
import { userData } from '../interfaces/collaborators.interface'
import {
	addDoc,
	getDoc,
    doc
} from 'firebase/firestore'

export class UserService {
	constructor(
		private readonly UserCollection = UserCollectionRef
	) {}
	async create(userdata: userData): Promise<ResponseService<string| null>> {
		try {
			const querySnapshot = await addDoc(
				this.UserCollection,
				userdata
			)
			const newUser = querySnapshot.id
			return { data: newUser, error: null }
		} catch (error) {
			return { data: null, error: null }
		}
	}
	async getUserData(
		userID: string
	): Promise<ResponseService<userData>> {
		try {
			const querySnapshot = await getDoc(doc(this.UserCollection,userID))
			const data = querySnapshot.data()
            console.log('data',data);
            
			return { data: data ?? {displayName: '', photoURL: ''}, error: null }
		} catch (error) {
            console.log(error);
            
			return {
				data:  {displayName: '', photoURL: ''},
				error: {
					message: 'Error al obtener las organizaciones del usuario',
					type: 'request',
				},
			}
		}
	}
}
