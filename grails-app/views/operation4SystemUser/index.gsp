<!--
  To change this license header, choose License Headers in Project Properties.
  To change this template file, choose Tools | Templates
  and open the template in the editor.
-->
<%@ page contentType="text/html;charset=UTF-8" %>

<html>
<head>
    <meta name="layout" content="main"/>
    <g:set var="entityName" value="SystemUser"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${entityName}维护</title>
    <asset:javascript src="cn/edu/cup/system/${entityName}.js"/>
</head>

<body>
<div class="container">
    <div class="row clearfix">
        <div class="col-md-6 column">
            <div class="panel panel-default">
                <div class="nav">
                    <ul>
                        <li>
                            <a class="list">
                                用户属性维护——(重新登录后，更新)
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="easyui-panel">
                    <div id="listSystemUserDiv"></div>
                    <div id="paginationSystemUserDiv" class="easyui-pagination"></div>
                </div>
            </div>
        </div>

        <div class="col-md-6 column">
            <div class="panel panel-default">
                <div class="nav" role="navigation">
                    <ul>
                        <li><a class="create" href="javascript: createSystemUser(0)">新建用户</a></li>
                    </ul>
                </div>

                <div class="easyui-panel">
                    <div id="showSystemUserDiv"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
