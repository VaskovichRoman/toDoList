Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    autoLoad: true,
    alias: 'viewmodel.main',

    stores: {
        toDoList: {
            fields: [
                {
                    name: 'date',
                    type: 'date',
                    //dateFormat: 'd.m.Y',
                    //mapping: 'availability'
                },
                {name: 'task', type: 'string'},
            ],
            data: [],

            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            listeners: {
                datachanged: 'saveLocalStorage'
            }
        }
    }

});