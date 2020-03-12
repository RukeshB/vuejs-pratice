var app1 = new Vue({
	el   : '#app1',
	data : {
		users : [
			{ fname: 'Ram', lname: 'Suwal', gender: 'male', age: 20 },
			{ fname: 'Shyam', lname: 'Duwal', gender: 'male', age: 21 },
			{ fname: 'Kamless', lname: 'Suwal', gender: 'male', age: 22 },
			{ fname: 'Season', lname: 'Naga', gender: 'female', age: 22 }
		]
	}
});

var form = new Vue({
	el      : 'form',
	data    : {
		fname  : '',
		lname  : '',
		gender : '',
		age    : ''
	},
	methods : {
		save : function() {
			app1.users.push({ fname: this.fname, lname: this.lname, gender: this.gender, age: this.age });
		}
	}
});
