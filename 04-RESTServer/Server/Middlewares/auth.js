const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, 'secret', (err, decoded) => {
        if(err){
            res.status(401).json({
                ok: false,
                err
            });
        }

        res.usuario = decoded.usuario;

        next();
    });
};

module.exports = {
    verificaToken
}