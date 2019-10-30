Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    stores: 'Tasks',
    alias: 'controller.main',

    onShowMoreClick: function () {
        var vm = this.getViewModel(),
            selRecord = vm.get('selToDo'),
            status = selRecord.get('active') ? 'DONE' : 'In progress';

        Ext.create({
            xtype: 'full-info-window',
            viewModel: {
                data: {
                    date: selRecord.get('date'),
                    task: selRecord.get('task'),
                    description: selRecord.get('description'),
                    action: status
                },
                parent: vm
            }
        }).show();
    },

    onAddTaskClick: function () {
        var vm = this.getViewModel();

        Ext.create({
            xtype: 'add-edit-task-window',
            viewModel: {
                data: {
                    date: Ext.Date.clearTime(new Date()),
                    isEdit: false
                },
                parent: vm
            }
        }).show();
    },

    onEditTaskClick: function () {
        var vm = this.getViewModel(),
            selRecord = vm.get('selToDo');

        Ext.create({
            xtype: 'add-edit-task-window',
            viewModel: {
                data: {
                    date: selRecord.get('date'),
                    task: selRecord.get('task'),
                    description: selRecord.get('description'),
                    isEdit: true
                },
                parent: vm
            }
        }).show();
    },

    onRemoveTask: function () {
        var vm = this.getViewModel(),
            selRecord = vm.get('selToDo');
        vm.get('toDoList').remove(selRecord);
    },

    loadLocalStorage: function () {
        var vm = this.getViewModel(),
            store = vm.get('toDoList');

        store.add(JSON.parse(localStorage.getItem('toDoList')));
    },

    saveLocalStorage: function () {
        var taskArray = [],
            vm = this.getViewModel(),
            currentList = vm.get('toDoList.data.items');

        Ext.Array.each(currentList, (item) => {
            taskArray.push({
                date: item.get('date'),
                task: item.get('task'),
                description: item.get('description'),
                active: item.get('active')
            });
        });
        localStorage.setItem('toDoList', JSON.stringify(taskArray));
    },

    beforeEditRow: function (editor, context) {
        return !context.record.get('active');
    }
});
