import User from '../models/Admin.js';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

const controller = {
    sign_up: async (req, res, next) => {
        try {
            // Hashear la contraseña
            const hashedPassword = bcryptjs.hashSync(req.body.password, 10);

            // Crear el usuario
            const user = await User.create({ name: req.body.name, password: hashedPassword });

            return res.status(201).json({
                success: true,
                message: 'Usuario Registrado!',
                user: {
                    _id: user._id,
                    name: user.name
                }
            });
        } catch (error) {
            next(error);
        }
    },

    sign_in: async (req, res, next) => {
        try {
            // Buscar el usuario por su nombre
            const user = await User.findOne({ name: req.body.name });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Credenciales inválidas'
                });
            }

            // Verificar la contraseña
            if (!bcryptjs.compareSync(req.body.password, user.password)) {
                return res.status(401).json({
                    success: false,
                    message: 'Credenciales inválidas'
                });
            }

            // Generar el token JWT
            const token = jsonwebtoken.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: '7d' }
            );

            return res.status(200).json({
                success: true,
                message: 'Conectado!',
                user: {
                    _id: user._id,
                    name: user.name 
                },
                token
            });
        } catch (error) {
            next(error);
        }
    }
};

export default controller;