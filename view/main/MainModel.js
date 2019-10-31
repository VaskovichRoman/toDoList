Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    autoLoad: true,
    alias: 'viewmodel.main',
    formulas: {
        disableRemoveAllBtn: {
            bind: {
                store: '{toDoList.data.items}'
            },
            get: function (data) {
                return !data.store.length;
            }
        }
    },
    stores: {
        toDoList: {
            fields: [
                {name: 'date', type: 'date'},
                {name: 'task', type: 'string'},
                {name: 'dateEnd', type: 'date'}
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
        },
        movieBD: {
            data: []
        }
    }
});