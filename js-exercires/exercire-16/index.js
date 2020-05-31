const url = 'https://www.facebook.com/ngothucdat';

const getId = (url) => {
    const domain = 'https://www.facebook.com/';
    let id = url.slice(domain.length, url.length);
    console.log(id);
}

getId(url);