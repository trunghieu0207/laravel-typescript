export default class User {
    public loadUser() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET','/api/user1');
        xhr.responseType = 'json';
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const status = xhr.status;
                if (status === 0 || (status >= 200 && status < 400)) {
                    console.log(xhr.response);
                    // this.showUser(xhr.responseText);
                } else {
                    console.log('error');
                }
            }
        }
        xhr.send();
    }

    public showUser(users) {
        const userEl = document.getElementsByClassName('user')[0];
        const elDiv = document.createElement('div');
        elDiv.innerText = users;
        userEl.appendChild(elDiv);
    }
}
