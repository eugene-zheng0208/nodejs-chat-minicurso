/*
// Carregando os módulos, o servidor e a seção
var server = require('./server');
var session = require('./session');
var ios = require('socket.io-express-session');
var io = require('socket.io')(server);
*/

/*
// Utilizando a seção no socket também
io.use(ios(session));
*/

// Array de clientes conectados
var clients = [];

// Quando um usuário se conecta
io.on('connection', function(socket){
	// TODO: Ao se conectar, coloca o usuário na lista de usuários online

	// TODO: Emite uma mensagem ao usuário, retornando seu nome de usuário

	// TODO: Emite a mensagem de novo usuário (newUser) 

	// TODO: Ao receber um envio de mensagem, emite a mensagem junto com o nome do usuário que enviou a mensagem (sendMessage)
	
	// TODO: Emite o evento de disconnect com o nome do usuário que se desconectou e deleta o usuário da lista de usuários online (disconnectUser)
});

module.exports = io;