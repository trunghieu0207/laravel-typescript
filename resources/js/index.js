import User from './user';
export function index() {
    const user = new User();
    user.loadUser();
}
