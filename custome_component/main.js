Vue.component('tasks',{
	props : ['list'],
	template:'#tasks-template',
	methods :{ 
		toggleCompletedFor : function(task){
			task.completed = !task.completed;
		}
	},
	computed : {
		remaining : function(){
			return this.list.filter(function(task){
				return !task.completed;
			}).length;
		}
	}
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