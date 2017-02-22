<%@ page import="cn.edu.cup.system.SystemTitle" %>
<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>
        <g:layoutTitle default="Grails"/>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <asset:stylesheet src="application.css"/>

    <!--引入easyui的相关内容-->
    <asset:stylesheet src="easyui/themes/default/easyui.css"/>
    <asset:stylesheet src="easyui/themes/icon.css"/>
    <asset:stylesheet src="easyui/themes/color.css"/>
    <!--asset:stylesheet src="easyui/themes/bootstrap/easyui.css"/-->
    <!--引入树形结构显示组件-->
    <asset:stylesheet src="bootstrap-treeview/bootstrap-treeview.min.css"/>
    <!--引入jqpagination的样式-->
    <!--asset:stylesheet src="jqpagination/jqpagination.css"/-->

    <!--引入CUP的相关内容-->
    <asset:stylesheet src="user/cup.css"/>

    <!--JS加载-->
    <asset:javascript src="jquery-2.2.0.min.js"/>

    <asset:javascript src="easyui/jquery.easyui.min.js"/>

    <asset:javascript src="bootstrap.js"/>
    <asset:javascript src="bootstrap-treeview/bootstrap-treeview.min.js"/>
    <asset:javascript src="jquery/jquery.cookie.js"/>
    <!--引入jqpagination-->
    <!--asset:javascript src="jqpagination/jquery.jqpagination.min.js"/-->
    <!--用户自定义的-->
    <asset:javascript src="user/common/common.js"/>

    <g:layoutHead/>
</head>

<body>

<!--这事页眉部分-->
<div class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <!-->
            <span class="applicationTitle">
                <a class="navbar-brand" href="http://www.cup.edu.cn">
                    <!--这是程序的图标-->
                    <i class="fa grails-icon">
                        <!--asset:image src="grails-cupsonly-logo-white.svg"/-->
                        <asset:image src="cup/${cn.edu.cup.system.SystemTitle.last()?.applicationLogo}"/>
                    </i> <!--Grails-->
                </a>
                <!--这是程序的标题-->
                <label>
                    ${cn.edu.cup.system.SystemTitle.last()?.applicationTitle}
                </label>
            </span>
        </div>

        <!--这是页眉右边的用户信息显示，以及登录、退出按钮 -->
        <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;">
            <ul class="nav navbar-nav navbar-right">
            <!--g:pageProperty name="page.nav" /-->
                <g:if test="${session.user}">
                    <li>
                        <a>
                            ${session?.user?.userName}/${session?.user?.roleAttribute}
                        </a>
                    </li>
                    <li><a href="${createLink(uri: '/home/logout')}">退出</a></li>
                </g:if>
                <g:else>
                    <li><a href="${createLink(uri: '/home/loginUI')}">去登录</li>
                </g:else>
            </ul>
        </div>
    </div>
</div>

<!--这是Home按钮-->
<div class="btn-group">
    <button type="button" class="btn btn-default">
        <a class="homeBtn" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a>
    </button>
</div>

<!--这里显示保存在会话中的各个菜单-->
<g:each in="${session.menuItems}" status="i" var="menuItem">
    <div class="btn-group">
        <button type="button" class="btn btn-default">${menuItem.menuContext}</button>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="caret"></span>
            <span class="sr-only">切换下拉菜单</span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <g:each in="${session.subMenuItems[i]}" status="j" var="subMenuItem">
                <li><a href="${createLink(uri: '/' + subMenuItem.menuAction)}">${subMenuItem.menuContext}</a></li>
            </g:each>
        </ul>
    </div>
</g:each>

<!--这是菜单区域与主显示区宇之间的一条分割线-->
<hr style="color: green; height: 2px">

<!--这是主显示区域，各个菜单所对应的内容将显示在这里-->
<div class="panel panel-primary">
    <div class="panel-body">
        <g:layoutBody/>
    </div>
</div>

<!-- 这是页脚信息显示 -->
<div id="footer">
    <ul class="nav navbar-right">
        <li>
            当前在线${session?.onlineCount}人
        </li>
        <li>
            当前用户：${session?.users}
        </li>
    </ul>
</div>

<!--asset:javascript src="application.js"/-->

</body>
</html>
