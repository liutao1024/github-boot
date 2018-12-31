package com.example.demo.sunline.exception;

/**
 * 自定义异常，继承不检查异常类，实现优雅异常
 * @author Cuijia
 *
 */
public final class SumpException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    
    //错误码
    private String errCode;
    //错误信息
    private String errMsg;

    public SumpException() {
        super();
    }
    
    public SumpException(String errCode) {
        super();
        this.setErrCode(errCode);
    }
    
    public SumpException(String errCode, String errMsg) {
        super();
        this.setErrCode(errCode);
        this.setErrMsg(errMsg);
    }

	public String getErrCode() {
		return errCode;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}
    
}
