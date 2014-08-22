var Question = require('./services/questionService'),
	Answer = require('./services/answerService'),
	url = require('url'),
	Pusher = require('pusher'),
	express = require('express'),
	pusher = new Pusher({
		appId: '86554',
		key: '1ff84d4e8db2d4e7eac1',
		secret: 'a821c080a6c73b097ae4'
	}),
	app=express();

app.get('/questions', function(req, res) {
	sendMessage('Someone asked for a list of qns');
    res.send(Question.getAll());
});

app.get('/questions/:id', function(req, res) {
	var id = req.params.id;
    res.send(Question.get(id));
});

app.get('/nextQuestion', function(req, res) {
    sendMessage(Question.getNext());
    res.send('next loaded');
});

app.get('/previousQuestion', function(req, res) {
    sendMessage(Question.getPrevious());
    res.send('prev loaded');
});

app.get('/answer', function(req, res) {
	var answerResponse = Answer.recieve(Question.getCurrent().id, req.query.data, req.connection.remoteAddress);

	if(answerResponse){
		sendMessage(answerResponse);
		res.send('Answer submitted');
	} else {
		res.send('You have already submitted answer for this question. Please try for the next question');
	}
});

app.listen(8080);
function sendMessage(message) {
	pusher.trigger('test_channel', 'my_event', {
		"message": message
	});
}