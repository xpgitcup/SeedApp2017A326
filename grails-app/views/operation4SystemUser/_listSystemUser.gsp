<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <g:set var="entityName" value="SystemUser"/>
    <title><g:message code="default.list.label" args="[entityName]"/></title>
</head>

<body>
<div id="list-systemUser" class="content scaffold-list" role="main">
    <h1><g:message code="default.list.label" args="[entityName]"/></h1>
    <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
    </g:if>
    <table>
        <thead>
        <th>用户名</th>
        <th>属性</th>
        </thead>
        <g:each in="${systemUserList}" status="i" var="item">
            <tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
                <td>
                    <a href="javascript: showSystemUser(${item.id})">
                        ${item.userName}
                    </a>
                </td>
                <td>${item.roleAttribute}</td>
            </tr>
        </g:each>
    </table>
</div>
</body>
</html>