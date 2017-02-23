package cn.edu.cup.os

import cn.edu.cup.dictionary.JsFrame
import cn.edu.cup.system.SystemAttribute
import cn.edu.cup.system.SystemAttributeController
import grails.converters.JSON

class Operation4SystemAttributeController extends SystemAttributeController{

    def treeViewService

    /*
    * 统计根属性
    * */
    def countSystemAttribute() {
        def count = SystemAttribute.countByUpAttributeIsNull()
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
    def getSystemAttribute(SystemAttribute systemAttribute) {
        def theModel = [systemAttribute: systemAttribute]
        if (request.xhr) {
            render(template: "showSystemAttribute", model:theModel)
        } else {
            theModel
        }
    }

    /*
    * 获取json格式的树形结构数据
    * */
    def getTreeSystemAttribute() {
        def data = SystemAttribute.findAllByUpAttributeIsNull(params);
        params.context = "name"
        params.subItems = "subAttribues"
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
