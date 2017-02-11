/**
 * Created by LiXiaoping on 2017/1/11.
 */

var systemMenuTree;

$(function(){
    systemMenuTree = $("#systemMenuDiv");
    getMenuTree();
});

function createMenuItem(id) {
    console.info("创建根节点...");
    ajaxRun('createSystemMenu', id, 'systemMenuEditDiv');
}

function editMenuItem(id) {
    console.info("编辑菜单项：" + id);
    ajaxRun('edit', id, 'systemMenuEditDiv');
}

function showMenuItem(id) {
    console.info("显示菜单项：" + id);
    ajaxRun('loadSystemMenuItem', id, 'systemMenuEditDiv');
}

function getMenuTree() {
    $.ajax({
        type: 'POST',
        url: 'getTreeStringA',
        success: function (data, textStatus) {
            console.info('获取成功...');   //调试用的
            console.info(data);
            systemMenuTree.treeview({
                data: data,
                showBorder: false,
                showTags: true,
                onNodeSelected: function (evevnt, data) {
                    console.info(data.tags);
                    console.info(data.nodeId);
                    console.info(data.text);
                    $('#createLeafMenu').attr('href','javascript: createMenuItem(' + data.tags[0] + ')');
                    showMenuItem(data.tags[0]);
                }
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.info(XMLHttpRequest);
            console.info(textStatus);
            console.info(errorThrown);
        }
    })
}