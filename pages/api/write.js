
export default async function handler(req, res) {
        if(req.method == 'POST') {
                console.log(req.body)
                res.redirect(302, '/reading')
        }
}