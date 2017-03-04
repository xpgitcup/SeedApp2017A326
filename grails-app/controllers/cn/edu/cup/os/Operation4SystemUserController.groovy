package cn.edu.cup.os

import cn.edu.cup.dictionary.JsFrame
import cn.edu.cup.system.SystemUser
import cn.edu.cup.system.SystemUserController
import grails.converters.JSON
import grails.transaction.Transactional

@Transactional(readOnly = true)
class Operation4SystemUserController extends SystemUserController{

    def treeViewService

    /*
    * 创建对象
    * */
    def createSystemUser() {
        def newSystemUser = new SystemUser()
        if (request.xhr) {
            render(template: 'editSystemUser', model: [systemUser: newSystemUser])
        } else {
            respond newSystemUser
        }
    }

    /*
    * 保存对象
    * */
    @Transactional
    def updateSystemUser(SystemUser systemUser) {
        println("准备更新：${systemUser}")
        systemUser.save flush:true
        redirect(action: 'index')
    }

    /*
    * 编辑对象
    * */
    def editSystemUser(SystemUser systemUser) {
        if (request.xhr) {
            render(template: 'editSystemUser', model: [systemUser: systemUser])
        } else {
            respond systemUser
        }
    }

    /*
    * 统计根属性
    * */
    def countSystemUser() {
        def count = SystemUser.count()
        println("统计结果：${count}")
        def result = [count: count]
        if (request.xhr) {
            render result as JSON
        } else {
            result
        }
    }

    /*
    * 获取当前id对应的对象
    * */
    def getSystemUser(SystemUser systemUser) {
        def theModel = [systemUser: systemUser]
        if (request.xhr) {
            render(template: "showSystemUser", model:theModel)
        } else {
            theModel
        }
    }

    /*
    * 查询List
    * */
    def listSystemUser() {
        def data = SystemUser.findAll(params);
        def theModel = [systemUserList: data]
        println("${data}")
        if (request.xhr) {
            render(template: "listSystemUser", model:theModel)
        } else {
            theModel
        }
    }

    def index() { }
}
