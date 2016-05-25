Vue.component('tasks',{
	props : ['list'],
	template:'#tasks-template'
});
new Vue({
	el : '#app',
	data : {
		tasks : [
			{body:'go to the school',completed:false},
			{body:'go to the bank',completed:true},
			{body:'go to the store',completed:false}
		]
	}
});