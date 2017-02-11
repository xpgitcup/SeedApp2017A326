/**
 * Created by LiXiaoping on 2017/1/13.
 */

var systemUserTree;

$(function(){
    systemUserTree = $("#systemUserDiv");
});

function createUserItem(id) {
    console.info("创建根节点...");
    ajaxRun('createSystemUser', id, 'systemUserEditDiv');
}

function editUserItem(id) {
    console.info("编辑菜单项：" + id);
    ajaxRun('edit', id, 'systemUserEditDiv');
}

function showUserItem(id) {
    console.info("显示菜单项：" + id);
    ajaxRun('loadSystemUserItem', id, 'systemUserEditDiv');
}
