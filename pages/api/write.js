
export default async function handler(req, res) {
        if (req.method === 'POST') {
                try {
                    const data = JSON.parse(req.body);  // JSON.parse를 사용해 요청 본문 파싱
                    console.log(data.title, data.text); // 올바르게 전달됐는지 확인
                    res.redirect(302, '/reading');
                } catch (error) {
                    console.error("JSON parsing error: ", error);
                    res.status(400).json({ error: "Invalid JSON format" });
                }
            } else {
                res.status(405).json({ error: "Method not allowed" });
            }
}