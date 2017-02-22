package cn.edu.cup.os

import cn.edu.cup.system.SystemUser

class HomeController {

    def systemCommonService
    def systemLogService

    def index() {

    }

    private void listSystemMenu() {
        //根据用户的属性，设置菜单
        params.user = session.user
        def menuItems = systemCommonService.getAllTopLevelMenus(params)
        println("${menuItems}")
        session.menuItems = menuItems
        def subMenuItems = []
        menuItems.eachWithIndex { Object entry, int i ->
            def ms = []
            entry.menuItems.each() { e ->
                ms.add(e)
            }
            subMenuItems.add(ms)
        }
        session.subMenuItems = subMenuItems
    }

    /*
    * 退出登录
    * */

    def logout() {
        def pscontext = request.session.servletContext
        Map serviceMap = pscontext.getAttribute("userList")
        if (session.user) {
            systemLogService.recordLog(session, request, params)
            serviceMap.remove(session.user.userName)
        }
        session.onlineCount = serviceMap.size()
        def logoutUser = session.user
        session.invalidate()
        //redirect(uri: "/")
        model: [logoutUser: logoutUser]
    }

    /*
    * 登录
    * */

    def login() {
        String userName = params.userName;
        String p = params.password.encodeAsMD5()
        def user = SystemUser.findByUserNameAndPassword(userName, p)
        if (user) {
            session.user = user
            //初始化用户菜单
            listSystemMenu()
            //在会话中登记用户
            registeUserInSession(user)
            systemLogService.recordLog(session, request, params)
        }
        redirect(uri: "/")
    }

    /*
    * 显示登录界面
    * */

    def loginUI() {}

    /*
    * 登记登录用户
    * */

    def registeUserInSession(user) {
        def pscontext = request.session.servletContext
        Map serviceMap = pscontext.getAttribute("userList")
        if (!serviceMap) {
            def userList = new HashMap()
            pscontext.putAt("userList", userList)
            serviceMap = userList
        }
        //登记用户
        serviceMap.putAt(user.userName, session)

        systemCommonService.updateUserList(request)
    }

}
