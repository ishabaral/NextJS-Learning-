export default function handler(req, res) {
    res.setPreviewData({ user: 'Isha' })
    res.redirect(req.query.redirect)
}