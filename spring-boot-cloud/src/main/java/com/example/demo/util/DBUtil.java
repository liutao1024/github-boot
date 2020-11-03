package com.example.demo.util;

import java.io.FileInputStream;
import java.sql.Connection;
import java.util.Properties;

import org.apache.commons.dbcp.BasicDataSource;

public class DBUtil {
	// DBCP 连接池
	private static BasicDataSource basicDataSource;
	static {
		try {
			// 读取jdbc配置文件 --- java.util.Properties用来读取配置文件
			Properties prop = new Properties();
			// 通过文件流读取并解析配置文件内容
			prop.load(new FileInputStream(
					"src/main/resources/jdbc.properties"));
			/*
			 * String getProperty(String key) 根据配置文件中每一项的key("="左边的内容)
			 * 获取对应的值("="右边的内容)
			 */
			String driverName = prop.getProperty("driverName");
			String url = prop.getProperty("url");
			String username = prop.getProperty("userName");
			String password = prop.getProperty("password");
			// 最大连接数
			int maxActive = Integer.parseInt(prop.getProperty("maxActive"));
			// 最大等待时间
			int maxWait = Integer.parseInt(prop.getProperty("maxWait"));
			basicDataSource = new BasicDataSource();
			basicDataSource.setDriverClassName(driverName);
			basicDataSource.setUrl(url);
			basicDataSource.setUsername(username);
			basicDataSource.setPassword(password);
			basicDataSource.setMaxActive(maxActive);// 连接池中的最大连接数
			basicDataSource.setMaxWait(maxWait);// 最大等待时间 getConnection时有效
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午12:04:22
	 * @Title: getConnection
	 * @Description: TODO(获取一个数据库连接)
	 * @return
	 * @throws Exception
	 */
	public static Connection getConnection() throws Exception {
		try {
			/**
			 * 连接池提供了一个方法: Connection getConnection() 该方法会将当前连接池中的一个空闲连接返回
			 * 由于连接池在创建时可以设置超时时间,该时间 的作用就在这里体现,当连接池中没有空闲连接 时,该方法会进入阻塞状态,等待控线连接,若
			 * 设置的超时时间经过后,连接池依然没有空闲连接 可用时,该方法会抛出超时异常。
			 */
			return basicDataSource.getConnection();
		} catch (Exception e) {
			System.out.println("连接数据库异常");
			throw e;
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午12:04:10
	 * @Title: close
	 * @Description: TODO(DBUtil类中添加关闭数据库连接的代码)
	 * @param conn
	 */
	public static void close(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午12:04:01
	 * @Title: rollback
	 * @Description: TODO(回滚数据库事务)
	 * @param conn
	 */
	public static void rollback(Connection conn) {
		if (conn != null) {
			try {
				conn.rollback();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

}
