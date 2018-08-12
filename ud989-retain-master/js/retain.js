$(function () {

	var model = {
		init: function () {
			if (!localStorage.notes) {
				console.log("m1");
				localStorage.notes = JSON.stringify([]);
			}
		},
		add: function (obj) {
			var data = JSON.parse(localStorage.notes);
			data.push(obj);
			console.log("data.push(obj)");
			localStorage.notes = JSON.stringify(data);
		},
		getAllNotes: function () {
			return JSON.parse(localStorage.notes);
			console.log("m2");
		}
	};


	var octopus = {
		addNewNote: function (noteStr) {
			model.add({
				content: noteStr,
				dateSubmitted: Date.now()
			});
			view.render();
			console.log("o1");
		},

		getNotes: function () {
			return model.getAllNotes().reverse();
			console.log("o2");
		},

		init: function () {
			model.init();
			view.init();
			console.log("o3");
		}
	};


	var view = {
		init: function () {
			this.noteList = $('#notes');
			var newNoteForm = $('#new-note-form');
			var newNoteContent = $('#new-note-content');
			newNoteForm.submit(function (e) {
				octopus.addNewNote(newNoteContent.val());
				newNoteContent.val('');
				e.preventDefault();
				console.log("v1");
			});
			view.render();
			console.log("v2");
		},
		render: function () {
			var htmlStr = '';

			console.log("v3");
			octopus.getNotes().forEach(function (note) {
				htmlStr += '<li class="note">' + '<span class="note-date">' + new Date(note.dateSubmitted).toString() + '</span>' +
					note.content +
					'</li>';
			});
			this.noteList.html(htmlStr);
		}
	};

	octopus.init();
});
