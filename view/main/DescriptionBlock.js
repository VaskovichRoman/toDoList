Ext.define('MyApp.view.main.DescriptionBlock', {
    extend: 'Ext.form.Panel',
    xtype: 'description-panel',
    title: 'Description',
    hidden: true,
    bind: {
        hidden: '{!selToDo}'
    },
    defaults: {
        padding: 10
    },
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Date',
            dateFormat: 'd.m.Y',
            bind: {
                value: '{selToDo.date:date("d.m.Y")}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Task',
            bind: {
                value: '{selToDo.task}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Description',
            bind: {
                value: '{selToDo.description}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Status',
            bind: {
                value: '{selToDo.active}'
            },
            renderer: function (value) {
                return value ? 'DONE' : 'In Progress'
            }
        }],
    }],
});