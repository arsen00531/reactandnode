export default class PostService {
    static async getAll() {
        const res = await fetch('/api')
        const response = await res.json()
        return response
    }
    static async remove(id) {
        const res = await fetch('/api/remove?id=' + id)
    }
}