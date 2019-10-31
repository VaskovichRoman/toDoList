Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    items: [{
        xtype: 'container',
        title: 'ToDoList',
        items: [
            {
                xtype: 'list-grid',
            },
            {
                xtype: 'description-panel',
            }
        ]
    }, {
        xtype: 'container',
        title: 'MovieBD'
    }]
});
