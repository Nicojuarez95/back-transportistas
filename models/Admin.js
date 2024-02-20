import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        password: { type: String, required: true },
    },{
        timestamps: true
    }
)
const Admin = mongoose.model('admin',schema)
export default Admin