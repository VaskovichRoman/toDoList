Ext.define('MyApp.view.main.ListGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'list-grid',
    title: 'TodoList',
    scrollable: 'y',
    maxHeight: 450,
    margin: '0 0 20 0',

    tbar: [
        {
            text: 'Add Window Task',
            handler: 'onAddTaskClick'
        }, {
            text: 'Edit Window Task',
            handler: 'onEditTaskClick',
            disabled: true,
            bind: {
                disabled: '{!selToDo || selToDo.active}'
            }
        }, {
            text: 'Show more info',
            handler: 'onShowMoreClick',
            disabled: true,
            bind: {
                disabled: '{!selToDo}'
            }
        }, '->', {
            text: 'Remove Task',
            handler: 'onRemoveTask',
            disabled: true,
            bind: {
                disabled: '{!selToDo}'
            }
        }],
    bind: {
        store: '{toDoList}',
        selection: '{selToDo}'
    },
    columns: [
        {
            xtype: 'datecolumn',
            header: 'startdate',
            dataIndex: 'date',
            format: 'd.m.Y',
            editor: {
                xtype: 'datefield',
                selectOnFocus: false,
                format: 'd.m.Y',
            }
        },
        {
            text: 'task',
            dataIndex: 'task',
            type: 'string',
            flex: 1,
            editor: {
                allowBlank: false
            }
        },
        {
            xtype: 'checkcolumn',
            text: 'done',
            dataIndex: 'active'
        }
    ],
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        listeners: {
            beforeedit: 'beforeEditRow'
        }
    },
    listeners: {
        beforerender: 'loadLocalStorage',
    }
});


