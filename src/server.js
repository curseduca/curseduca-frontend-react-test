import 'dotenv/config';
import app from './app';

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})