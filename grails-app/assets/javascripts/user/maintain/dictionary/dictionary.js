/**
 * Created by LiXiaoping on 2017/2/5.
 */

var maintain4DictionaryDiv
var maintain4DictionaryTabTitle
var projectPagenationDiv
var projectCasePagenationDiv
var dataModelPagenationDiv
var dictionaryPageSize = 10
var projectTotal;
var projectCaseTotal;
var dataModelTotal
var projectPageNumber
var projectCasePageNumber
var dataModelPageNumber
var pageSets

$(function () {
    console.info("维护数据字典...");
    //获取数据字典维护的ID
    maintain4DictionaryDiv = $("#maintain4DictionaryDiv");
    projectPagenationDiv = $("#projectPagenationDiv");
    projectCasePagenationDiv = $("#projectCasePagenationDiv");
    dataModelPagenationDiv = $("#dataModelPagenationDiv");
    //projectTotal = parseInt($.cookie("projectTotal"));
    //projectTotal = $.cookie('projectTotal');
    projectTotal = $("#projectTotal").text()    //括号很重要！！
    projectCaseTotal = $("#projectCaseTotal").text();
    dataModelTotal = $("#dataModelTotal").text();
    console.info("projectTotal:" + projectTotal);
    //设置响应函数
    maintain4DictionaryDiv.tabs({
        onSelect: function (title, index) {
            $.cookie("maintain4DictionaryTabTitle", title);
            loadTab4Title(title, index);
        }
    })
    //初始设置分页
    pageSets = {
        pageSize: dictionaryPageSize
        //showPageList: true,
        //displayMsg: '',
        //layout: ['first', 'prev', 'links', 'next', 'last']
    }
    //工程项目
    projectPagenationDiv.pagination(pageSets);
    projectPagenationDiv.pagination({
        total: projectTotal,
        onSelectPage: function (pageNumber, pageSize) {
            loadDataKey4Project(pageNumber, pageSize);
        }
    });
    //工程算例
    projectCasePagenationDiv.pagination(pageSets);
    projectCasePagenationDiv.pagination({
        total: projectCaseTotal,
        onSelectPage: function (pageNumber, pageSize) {
            loadDataKey4ProjectCase(pageNumber, pageSize);
        }
    })
    //数学模型
    dataModelPagenationDiv.pagination(pageSets);
    dataModelPagenationDiv.pagination({
        total: dataModelTotal,
        onSelectPage: function (pageNumber, pageSize) {
            loadDataKey4DataModel(pageNumber, pageSize);
        }
    })

    //加载初始页面---初始页面只能是“工程项目”
    /*
    maintain4DictionaryTabTitle = $.cookie("maintain4DictionaryTabTitle");
    if (!maintain4DictionaryTabTitle) {
        maintain4DictionaryTabTitle = "工程项目";
    }
    maintain4DictionaryDiv.tabs("select", maintain4DictionaryTabTitle);
    console.info("初始页面:" + maintain4DictionaryTabTitle);
    */
    showProject();
});
//----------------------------------------------------------------------------------------------------------------------

/*
* 选择当前项目
* */
function selectProject(id) {
    console.info("选择：" + id);
    $.cookie("defaultProject", id);
    $("#defaultProjectId").text(id);
    //更新defaultProject
    displayDataKeyStr(id, "defaultProject");
    //级联选择算例
    var defaultProjectCaseId = cascadeSelect(id);
    selectProjectCase(defaultProjectCaseId);
}

/*
* 显示关键字的字符串信息
* */
function displayDataKeyStr(id, sid) {
    $.ajax({
        url:"loadDataKey",
        data: {id: id},
        success: function (data, textStatus) {
            console.info("选择DataKey：" + data.data);
            $("#" + sid).text(data.data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.info(XMLHttpRequest);
            console.info(textStatus);
            console.info(errorThrown);
        }
    });
}

/*
* 级联选择下一级的关键字
* */
function cascadeSelect(id) {
    console.info("级联选择：" + id);
    var resultid
    $.ajax({
        url:"loadDataKeyByUpKey",
        data: {id: id},
        async: false,
        success: function (data, textStatus) {
            console.info("选择DataKey：" + data.subDataKey[0].id);
            resultid = data.subDataKey[0].id;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.info(XMLHttpRequest);
            console.info(textStatus);
            console.info(errorThrown);
        }
    });
    return resultid
}

/*
* 选择当前的算例等等
* */
function selectProjectCase(id) {
    console.info("选择算例：" + id);
    $("#defaultProjectCaseId").text(id);
    $.cookie("defaultProjectCase", id);
    displayDataKeyStr(id, "defaultProjectCase");
    //级联选择数学模型
    var defaultDataModelId = cascadeSelect(id);
    selectDataModel(defaultDataModelId);
}

/*
* 选择当前的数学模型
* */
function selectDataModel(id) {
    console.info("选择模型：" + id);
    $("#defaultDataModelId").text(id);
    $.cookie("defaultDataModel", id);
    displayDataKeyStr(id, "defaultDataModel");
}

/*
* 显示缺省的工程项目
* */
function showProject() {
    projectPageNumber = $.cookie("projectPageNumber");
    if (!projectPageNumber) {
        projectPageNumber = 1;
    }
    projectPagenationDiv.pagination("select", projectPageNumber);
    console.info("初始化：" + projectPageNumber)
}

/*
* 加载相应的tab页面
* */
function loadTab4Title(title, index) {
    console.info("切换到：" + title);
    switch (title) {
        case "工程项目":
            showProject();
            break;
        case "工程算例":
            projectCasePageNumber = $.cookie("projectCasePageNumber");
            if (!projectCasePageNumber) {
                projectCasePageNumber = 1;
            }
            projectCasePagenationDiv.pagination("select", projectCasePageNumber);
            break;
        case "数学模型":
            dataModelPageNumber = $.cookie("dataModelPageNumber");
            if (!dataModelPageNumber) {
                dataModelPageNumber = 1;
            }
            dataModelPagenationDiv.pagination("select", dataModelPageNumber);
            break;
    }
}

function loadDataKey4Project(pageNumber, pageSize) {
    console.info("工程项目： " + pageNumber);
    $.cookie("projectPageNumber", pageNumber);
    ajaxRun("loadDataKeyProject" + getParams(pageNumber, pageSize), 0, "projectDiv");
}

function loadDataKey4ProjectCase(pageNumber, pageSize) {
    console.info("加载工程算例： " + pageNumber);
    $.cookie("projectCasePageNumber", pageNumber);
    ajaxRun("loadDataKeyProjectCase" + getParams(pageNumber, pageSize), 0, "projectCaseDiv");
}

function loadDataKey4DataModel(pageNumber, pageSize) {
    console.info("加载数学模型： " + pageNumber);
    $.cookie("dataModelPageNumber", pageNumber);
    ajaxRun("loadDataKeyDataModel" + getParams(pageNumber, pageSize), 0, "dataModelDiv");
}