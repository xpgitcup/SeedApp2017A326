/**
 * Created by Win10Lxp on 2016/8/13.
 */

var physicalQuantityIndexDiv;

$(function () {
    physicalQuantityIndexDiv = $('#physicalQuantityIndexDiv');

    var pid = $.cookie('pid');
    if (pid) {
        console.info("调入" + pid);
        loadQuantityUnits(pid);
    } else {
        console.info("没有啊...");
    }
});

function editPhysicalQuantity(pid) {
    ajaxRun('editPhysicalQuantity', pid, 'physicalQuantityEditDiv');
    physicalQuantityIndexDiv.tabs('select', '物理量编辑');
}

function editQuantityUnit(pid) {
    ajaxRun('editQuantityUnit', pid, 'quantityUnitEditDiv');
    physicalQuantityIndexDiv.tabs('select', '单位编辑');
}

function showQuantityUnit(pid) {
    ajaxRun('showQuantityUnit', pid, 'quantityUnitEditDiv');
    physicalQuantityIndexDiv.tabs('select', '单位编辑');
}

function showPhysicalQuantity(pid) {
    ajaxRun('showPhysicalQuantity', pid, 'physicalQuantityEditDiv');
    physicalQuantityIndexDiv.tabs('select', '物理量编辑');
}

function loadQuantityUnits(id) {
    ajaxRun('loadQuantityUnits', id, 'quantityUnitDiv');
    physicalQuantityIndexDiv.tabs('select', '单位维护');
}

function createPhysicalQuantity() {
    console.info("创建物理量");
    ajaxRun('createPhysicalQuantity', null, 'physicalQuantityEditDiv');
    physicalQuantityIndexDiv.tabs('select', '物理量编辑');
    //这个时候，要把cookieq清除
    $.cookie('pid', '', {path: '/', expires: -1}); // 删除 cookie
}

function createQuantityUnit(pid) {
    console.info("创建单位" + pid);
    $.cookie('pid', pid, {path: '/'});
    ajaxRun('createQuantityUnit', pid, 'quantityUnitEditDiv');
    physicalQuantityIndexDiv.tabs('select', '单位编辑');
}
