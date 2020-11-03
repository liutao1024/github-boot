package cn.spring.boot.global;

import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;

public class NetUtils {
	/**
	 * 测试本机端口是否被使用
	 * @param port
	 * @return
	 */
	public static boolean isLocalPortUsing(int port) {
		boolean flag = true;
		try {
			// 如果该端口还在使用则返回true,否则返回false,127.0.0.1代表本机
			flag = isPortUsing("127.0.0.1", port);
		} catch (Exception e) {

		}
		return flag;
	}

	/***
	 * 测试主机Host的port端口是否被使用
	 * @param host
	 * @param port
	 * @throws UnknownHostException
	 */

	public static boolean isPortUsing(String host, int port) {
		boolean flag = false;
		try {
			InetAddress Address = InetAddress.getByName(host);
			@SuppressWarnings({ "resource", "unused" })
			Socket socket = new Socket(Address, port); // 建立一个Socket连接
			flag = true;
		} catch (IOException e) {
			// log.info(e.getMessage,e);
		}
		return flag;
	}
	// start--end是所要检测的端口范围
	static int start = 0;
	static int end = 1024;
	/**
	 * 由于本机上安装了mysql，采用3306端口去验证
	 * @param args
	 */

	public static void main(String args[]) {
		int testPost = 3306;
		if (isLocalPortUsing(testPost)) {
			System.out.println("端口 " + testPost + " 已被使用");
		} else {
			System.out.println("端口 " + testPost + "未使用");
		}
	}
}
