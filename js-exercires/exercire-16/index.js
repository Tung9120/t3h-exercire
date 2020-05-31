const url = 'https://www.facebook.com/ngothucdat';

const getId = (url) => {
    const domain = 'https://www.facebook.com/';
    let id = url.slice(domain.length, url.length);
    return id;
}

console.log('getId("https://www.facebook.com/ngothucdat"):', getId("https://www.facebook.com/ngothucdat"));