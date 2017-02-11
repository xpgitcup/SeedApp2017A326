/**
 * Created by LiXiaoping on 2017/1/22.
 */

var dataKeyTree

$(function () {
    dataKeyTree = $("#dataKeyTree");
    dataKeyTree.tree({
        url: "getTreeStringA",
        onSelect: function (node) {
            showTreeNode(node);
            $("#createDataKey").attr('href', 'javascript: createDataKey(' + node.attributes[0] + ')');
            console.info(node);
            console.info("当前节点：" + node.target.id);
            $.cookie("currentNode", node.target.id);
        },
        onLoadSuccess: function () {
            dataKeyTree.tree("collapseAll");
            var nodeid = $.cookie("currentNode");
            console.info("当初扩展到" + nodeid);
            var cNode = $("#" + nodeid);
            dataKeyTree.tree("expandTo", cNode);
        }
    });
});

function createDataKey(id) {
    ajaxRun("createDataKey", id, "dataKeyEditDiv");
}

function editDataKey(id) {
    console.info("编辑数据字典项：" + id);
    ajaxRun('edit', id, 'dataKeyEditDiv');
}

function showTreeNode(node) {
    var p = $("#dataKeyTreeParams").text()
    $.cookie("DataKeyTreePosition", p);
    console.info(node);
    console.info(node.attributes[0]);
    ajaxRun("showDataKey" + p, node.attributes[0], "dataKeyEditDiv")
}