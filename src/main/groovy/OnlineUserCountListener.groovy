
import javax.servlet.ServletContext
import javax.servlet.annotation.WebListener
import javax.servlet.http.HttpSession
import javax.servlet.http.HttpSessionEvent
import javax.servlet.http.HttpSessionListener

/**
 * Created by LiXiaoping on 2017/1/1.
 */
@WebListener
class OnlineUserCountListener implements HttpSessionListener {
    @Override
    void sessionCreated(HttpSessionEvent se) {
        System.out.println("创建session......");
    }

    @Override
    void sessionDestroyed(HttpSessionEvent se) {
        HttpSession s = se.getSession();
        if (s != null) {
            ServletContext ctx = s.getServletContext();
            if (ctx != null) {
                Map serviceMap = (Map) ctx.getAttribute("userList");
                if (serviceMap != null) {
                    serviceMap.remove(s.id);
                }
            }
        }
    }
}
