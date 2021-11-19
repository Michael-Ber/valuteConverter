
async function getData () {
    let res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain' 
        },
        mode: 'cors'
    });
    if(!res.ok) {
        throw new Error(`Error with status ${res.status}`)
    }
    return await res.text();
}

export default getData;