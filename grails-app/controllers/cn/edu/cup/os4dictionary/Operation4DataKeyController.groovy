package cn.edu.cup.os4dictionary

import cn.edu.cup.dictionary.JsFrame
import cn.edu.cup.dictionary.DataKey
import cn.edu.cup.dictionary.DataKeyController
import grails.converters.JSON
import grails.transaction.Transactional

@Transactional(readOnly = true)
class Operation4DataKeyController extends DataKeyController{

    def treeViewService

    /*
    * 创建对象
    * */
    def createDataKey(DataKey dataKey) {
        def newDataKey = new DataKey(upKey: dataKey)
        if (request.xhr) {
            render(template: 'editDataKey', model: [dataKey: newDataKey])
        } else {
            respond newDataKey
        }
    }

    /*
    * 保存对象
    * */
    @Transactional
    def updateDataKey(DataKey dataKey) {
        println("准备更新：${dataKey}")
        dataKey.save flush:true
        redirect(action: 'index')
    }

    /*
    * 编辑对象
    * */
    def editDataKey(DataKey dataKey) {
        if (request.xhr) {
            render(template: 'editDataKey', model: [dataKey: dataKey])
        } else {
            respond dataKey
        }
    }

    /*
    * 统计根属性
    * */
    def countDataKey() {
        def count = DataKey.countByUpKeyIsNull()
        println("统计结果：${count}")
        def result = [count: count]
        if (request.xhr) {
            render result as JSON
        } else {
            result
        }
        //return count //就是不行
    }

    /*
    * 获取当前id对应的对象
    * */
    def getDataKey(DataKey dataKey) {
        def theModel = [dataKey: dataKey]
        if (request.xhr) {
            render(template: "showDataKey", model:theModel)
        } else {
            theModel
        }
    }

    /*
    * 获取json格式的树形结构数据
    * */
    def getTreeDataKey() {
        def data = DataKey.findAllByUpKeyIsNull(params);
        params.context = "keyContext"
        params.subItems = "subKeys"
        params.attributes = "id"    //
        def result = treeViewService.generateNodesString(data, params, JsFrame.EasyUI)
        if (request.xhr) {
            render result as JSON
        } else {
            result
        }
    }

    def index() { }
}
