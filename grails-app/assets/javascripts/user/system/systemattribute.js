/**
 * Created by LiXiaoping on 2017/1/12.
 */

var systemAttributeTree;

$(function(){
    systemAttributeTree = $("#systemAttributeDiv");
    getAttributeTree();
});

function createAttributeItem(id) {
    console.info("创建根节点...");
    ajaxRun('createSystemAttribute', id, 'systemAttributeEditDiv');
}

function editAttributeItem(id) {
    console.info("编辑菜单项：" + id);
    ajaxRun('edit', id, 'systemAttributeEditDiv');
}

function showAttributeItem(id) {
    console.info("显示菜单项：" + id);
    ajaxRun('loadSystemAttributeItem', id, 'systemAttributeEditDiv');
}

function getAttributeTree() {
    $.ajax({
        type: 'POST',
        url: 'getTreeStringA',
        success: function (data, textStatus) {
            console.info('获取成功...');   //调试用的
            console.info(data);
            systemAttributeTree.treeview({
                data: data,
                showBorder: false,
                showTags: true,
                onNodeSelected: function (evevnt, data) {
                    console.info(data.tags);
                    console.info(data.nodeId);
                    console.info(data.text);
                    $('#createLeafAttribute').attr('href','javascript: createAttributeItem(' + data.tags[0] + ')');
                    showAttributeItem(data.tags[0]);
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