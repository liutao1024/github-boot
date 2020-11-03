package cn.spring.boot.global;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.spring.boot.connector.ResponseData;

@ControllerAdvice
public class BootException {
    private Logger logger = LoggerFactory.getLogger(BootException.class);
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public ResponseData defaultErrorHandler(HttpServletRequest req, Exception e) throws Exception {
        logger.error("", e);
        ResponseData r = new ResponseData();
        r.setMessage(e.getMessage());
        if (e instanceof org.springframework.web.servlet.NoHandlerFoundException) {
            r.setCode(404);
        } else {
            r.setCode(500);
        }
        r.setData(null);
        r.setStatus(false);
        return r;
    }
    /**
     * @Author LiuTao @Date 2020年11月3日 上午11:30:23 
     * @Title: saveLog 
     * @Description: 异步处理
     */
    @Async
    public void saveLog() {
        System.err.println(Thread.currentThread().getName());
    }
}
