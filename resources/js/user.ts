interface UserParams {
    created_at?: string;
    email: string;
    email_verified_at?: string;
    id: number;
    name: string;
    password: string;
    phone: string;
    remember_token?: string;
    updated_at?: string;
}

export default class User {
    public loadUser(): void {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/user1');
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    console.log(xhr.response);
                    // this.showUser(xhr.response);
                } else {
                    console.log('error');
                }
            }
        };
        xhr.send();
    }

    public showUser(users: UserParams): void {
        const userEl = document.getElementsByClassName('user')[0];
        const elDiv = document.createElement('div');
        elDiv.innerText = users.toString();
        userEl.appendChild(elDiv);
    }
}
