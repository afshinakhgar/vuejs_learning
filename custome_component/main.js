Vue.component('tasks',{
	props : ['list'],
	template:'#tasks-template',
	computed : {
		remaining : function(){
			var vm = this;
			return this.list.filter(function(task){
				return vm.isInProgress(task);
			}).length;
		}
	},
	methods :{ 
		toggleCompletedFor : function(task){
			task.completed = !task.completed;
		},
		isCompleted : function(task){
			return task.completed;
		},
		isInProgress : function(task){
			return !task.completed;
		}
	},
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