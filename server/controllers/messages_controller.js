let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text} = req.body
        const updateID = req.params.id // This is based on what they put in the url bar, hence the req.params
        const messageIndex = messages.findIndex(element => +element.id === updateID)
        let element = messages[messageIndex]

        messages[messageIndex] = {
            id: messages.id,
            text: text || messages.text,
            time: messages.text
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteId = req.params.id
        const messageIndex = messages.findIndex(element => +element.id === deleteId)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}