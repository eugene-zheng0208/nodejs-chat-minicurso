var SELFUSERNAME = '';
var socket;

function scrollEnd() {
	var height = $('.list-messages .row').height();

	$(window).scrollTop(height);
}

function openSocketConnection() {
	var socketConnection = io.connect('http://localhost:3000');

	return socketConnection;
}

function printIntoChatOutput(html) {
	$('.list-messages .row').append(html);
	scrollEnd();
}

function handleNewUser(data) {
	var html = "<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 message-item'><div class='list-group'> <span href='#' class='list-group-item list-group-item-info'> <p class='list-group-item-text'>" + data.username + " está online.</p> </span> </div></div>";

	printIntoChatOutput(html);
}

function handleDisconnnectedUser(data) {
	var html = "<div class='col-lg-12 col-md-12 col-xs-12 col-sm-12 message-item'><div class='list-group'> <span href='#' class='list-group-item list-group-item-danger'> <p class='list-group-item-text'>" + data.username + " se desconectou.</p> </span> </div></div>";

	printIntoChatOutput(html);
}

function handleSelfMessage(message) {
	var html = "<div class='col-lg-5 col-md-6 col-xs-8 col-sm-7 col-lg-offset-7 col-md-offset-6 col-xs-offset-4 col-sm-offset-5 message-item'><div class='list-group'> <span href='#' class='list-group-item active'> <p class='list-group-item-text'>" + message + "</p> </span> </div></div><div class='clearfix'></div>";

	printIntoChatOutput(html);
}

function handleNewMessage(data) {
	var html = "<div class='col-lg-5 col-md-6 col-xs-8 col-sm-7 message-item'><div class='list-group'> <span href='#' class='list-group-item'> <small class='list-group-item-heading'>" + data.username + "</small> <p class='list-group-item-text'>" + data.message + "</p> </span> </div></div><div class='clearfix'></div>";

	printIntoChatOutput(html);
}

function formListening() {
	var messageForm = $('#message_form');

	messageForm.submit(function(e) {
		formHandle(e);
	});
}

function formHandle(e) {
	e.preventDefault();

	var data = $(this).serializeArray();

	var $input = $('#message_form :input[type=text]');

	$input.each(function() {
		$(this).val('');
	});

	handleSelfMessage(data[0].value);

	/*socket.emit('sendMessage', data[0].value);*/
}

$(window).on('load', function() {
	formListening();
	/*socket = openSocketConnection();*/

	/*
	socket.on('selfUser', function(data) {
		SELFUSERNAME = data.username;
	});

	socket.on('newUser', function(data) {
		handleNewUser(data);
	});

	socket.on('disconnectUser', function(data) {
		handleDisconnnectedUser(data);
	});

	socket.on('newMessage', function(data) {
		handleNewMessage(data);
	});
	*/
});