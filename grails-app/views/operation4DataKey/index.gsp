<!--
  To change this license header, choose License Headers in Project Properties.
  To change this template file, choose Tools | Templates
  and open the template in the editor.
-->

<%@ page contentType="text/html;charset=UTF-8" %>

<html>
<head>
    <meta name="layout" content="main"/>
    <g:set var="entityName" value="DataKey"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${entityName}维护</title>
    <asset:javascript src="cn/edu/cup/dictionary/${entityName}.js"/>
</head>

<body>
<div class="container">
    <div class="row clearfix">
        <div class="col-md-4 column">
            <div class="panel panel-default">
                <div class="nav">
                    <ul>
                        <li>
                            <a class="list">
                                数据字典维护——(重新登录后，更新)
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="easyui-panel">
                    <div id="displayTreeDataKeyDiv" class="easyui-tree"></div>
                    <div id="paginationDataKeyDiv" class="easyui-pagination"></div>
                </div>
            </div>
        </div>

        <div class="col-md-8 column">
            <div class="panel panel-default">
                <div class="nav" role="navigation">
                    <ul>
                        <li><a class="create" href="javascript: createDataKey(0)">新建根节点</a></li>
                        <li><a id="createDataKey" class="create" href="#">新建子节点</a></li>
                    </ul>
                </div>

                <div class="easyui-panel">
                    <div id="showDataKeyDiv"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
