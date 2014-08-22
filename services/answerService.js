var Answer;

(function() {

	var answers = [];

	Answer = {
		recieve: function(questionId, answer, ip) {
			console.log(questionId, answer, ip);
			var answerFound = false;
			answers.forEach(function(a) {
				console.log('checking', a.questionId == questionId, a.ip == ip)
				if (a.questionId == questionId && a.ip == ip) {
					answerFound = true;
				}
			});

			if(answerFound) return false;

			var answerObject = {
				questionId: questionId,
				ip: ip,
				text: answer
			};
			answers.push(answerObject);
			return answerObject;
		}
	}


})(Answer);

module.exports = Answer;