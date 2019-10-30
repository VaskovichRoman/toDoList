Ext.define('MyApp.view.AddEditWindow.ShowFullInfoWindow', {
    extend: 'Ext.window.Window',
    title: 'Full Information',
    xtype: 'full-info-window',
    width: 500,
    padding: 10,
    modal: true,
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'Date',
            dateFormat: 'd.m.Y',
            bind: {
                value: '{date:date("d.m.Y")}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Task',
            bind: {
                value: '{task}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Description',
            bind: {
                value: '{description}'
            }
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Status',
            bind: {
                value: '{action}',
            }
        }
        ],
    }]
});