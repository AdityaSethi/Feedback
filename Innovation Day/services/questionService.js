var Question;

(function() {

	var questions = [{
			'id': 1,
			'text': 'What is your name ? '
		}, {
			'id': 2,
			'text': 'Hello how are you ? '
		}, {
			'id': 3,
			'text': 'What do you want to build today ? '
		}],
		currentQuestionId = 1;

	Question = {
		getAll: function() {
			return questions;
		},
		add: function(question) {
			questions.push(question);
		},
		get: function(id) {
			return questions[id-1];
		},
		getCurrent: function() {
			return this.get(currentQuestionId);
		},
		getPrevious: function() {
			return currentQuestionId > 1 ? this.get(--currentQuestionId) : 'start';
		},
		getNext: function() {
			return currentQuestionId < questions.length ? this.get(++currentQuestionId) : 'finished';
		}
	}
})(Question);

module.exports = Question;