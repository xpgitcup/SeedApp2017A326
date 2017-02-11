/**
 * Created by LiXiaoping on 2017/1/12.
 */

/*
 * 分页计算函数
 * */
function getParams(pageNumber, pageSize) {
    var offset
    if (pageNumber > 1) {
        offset = (pageNumber - 1) * pageSize
    } else {
        offset = 0
    }
    var params = "?offset=" + offset + "&max=" + pageSize
    return params
}

/*
 * 通用的ajax执行函数
 * */
function ajaxRun(url, id, divId) {
    console.info(url + '---' + id);
    if (id != null) {
        $.ajax({
            type: 'POST',
            url: url,
            data: {id: id},
            success: function (data, textStatus) {
                $('#' + divId).html(data);
                //console.info(data);   //调试用的
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.info(XMLHttpRequest);
                console.info(textStatus);
                console.info(errorThrown);
            }
        });
    } else {
        $.ajax({
            type: 'POST',
            url: url,
            success: function (data, textStatus) {
                $('#' + divId).html(data);
                //console.info(data);   //调试用的
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.info(XMLHttpRequest);
                console.info(textStatus);
                console.info(errorThrown);
            }
        });
    }
}

