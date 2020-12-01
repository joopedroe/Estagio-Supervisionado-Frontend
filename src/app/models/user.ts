//import { Role } from './role';

export class User {
    constructor(public id: number,public createdAt: string,
        public email: string,
        public updatedAt: string,
        public username: string)
        {}
}
