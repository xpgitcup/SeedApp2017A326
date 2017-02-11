/**
 * Created by Win10Lxp on 2016/8/18.
 */

var pSelect
var qSelect
var qtSelect

$(function(){
    pSelect = $('#physical4Value');
    qSelect = $('#unit4Value');
    qtSelect = $('#targetUnit4Value');
})

function unitConversion() {
    console.info("单位换算......")
    var sData = $('#sourceValue').val()
    var sUnit = $('#unit4Value').val()
    var tUnit = $('#targetUnit4Value').val()
    console.info(sData + ':' + sUnit + '->' + tUnit);
    $.ajax({
        type: 'POST',
        url: 'unitConversion',
        data: {sourceValue: sData, sourceUnit: sUnit, targetUnit: tUnit},
        success: function (data, textStatus) {
            console.info(data);   //调试用的
            $('#targetValue').attr('value', data.result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.info(XMLHttpRequest);
            console.info(textStatus);
            console.info(errorThrown);
        }
    })
}

function changePhysicalQuantity() {
    console.info("演示物理单位转换......")
    var pid = pSelect.find("option:selected").val()
    console.info('选择物理量' + pid);
    ajaxQuery('queryPhysicalQuantity', pid);
}

function ajaxQuery(url, id) {
    console.info(url + '---' + id);
    $.ajax({
        type: 'POST',
        url: url,
        data: {id: id},
        success: function (data, textStatus) {
            console.info(data);   //调试用的
            qSelect.empty();
            qtSelect.empty();
            for (x in data) {
                console.info(x);
                console.info(data[x]);
                qSelect.append('<option value="'+ data[x].id + '">' + data[x].label + '</option>');
                qtSelect.append('<option value="'+ data[x].id + '">' + data[x].label + '</option>');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.info(XMLHttpRequest);
            console.info(textStatus);
            console.info(errorThrown);
        }
    })
}
