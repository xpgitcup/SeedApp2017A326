/**
 * Created by LiXiaoping on 2017/1/20.
 */

var cPageNo
var cPageNo2Me
var cPageSize

$(function () {
    cPageNo = $.cookie('cPageNo');
    if (!cPageNo) { cPageNo = 1; }
    cPageNo2Me = $.cookie('cPageNo2Me');
    if (!cPageNo2Me) { cPageNo2Me = 1; }

    cPageSize = $.cookie('cPageSize');
    if (!cPageSize) { cPageSize = 10; }

    loadMessageToMe(cPageNo2Me, cPageSize);
    loadMessageByI(cPageNo, cPageSize);
});

function createMessage() {
    ajaxRun("createMessage", null, "messageToMeDiv");
}

function replyChat(id) {
    ajaxRun("replyChat", id, "messageByIDiv");
}

function getOffset(pageNo, pageSize) {
    var offset
    if (pageNo > 1) {
        offset = pageSize * (pageNo - 1)
    } else {
        offset = 0
    }
    return offset;
}

function loadMessageToMe(pageNo, pageSize) {
    var offset = getOffset(pageNo, pageSize);
    console.info("查询信息ToMe...");
    console.info(offset, pageSize, pageNo);
    ajaxRun("loadMessage/?isay=0&offset="+offset+"&max="+pageSize+"&pageNo="+pageNo, null, "messageToMeDiv");
    $.cookie('cPageNo2Me', pageNo);
}

function loadMessageByI(pageNo, pageSize) {
    var offset = getOffset(pageNo, pageSize);
    console.info("查询信息ByI...");
    console.info(offset, pageSize, pageNo);
    ajaxRun("loadMessage/?isay=1&offset="+offset+"&max="+pageSize+"&pageNo="+pageNo, null, "messageByIDiv");
    $.cookie('cPageNo', pageNo);
}
