package com.example.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.entity.User;
import com.example.demo.model.StudentModel;
import com.example.demo.util.DBUtil;

/**
 * @author LiuTao @date 2018年4月18日 上午11:43:57
 * @ClassName: UserDao
 * @Description: TODO(提供User类的数据库方法增、删、改、查)
 */
public class UserDao {
	/**
	 * @author LiuTao @date 2018年4月18日 下午2:04:53
	 * @Title: addUser
	 * @Description: TODO(添加User用户)
	 * @param user
	 * @return
	 */
	public static int addUser(User user) {
		int returnInt = 0;
		String insertSQl = "insert into user (id, name, password) values (?, ?, ?)";
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			PreparedStatement ps = conn.prepareStatement(insertSQl);
			ps.setString(1, user.getId());
			ps.setString(2, user.getName());
			ps.setString(3, user.getPassword());
			returnInt = ps.executeUpdate();
			ps.close();
			return returnInt;
		} catch (Exception e) {
			 e.printStackTrace();
			return -1;
		} finally {
			DBUtil.close(conn);
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午2:04:56
	 * @Title: deleteUser
	 * @Description: TODO(Describe)
	 * @param id
	 * @return
	 */
	public static int deleteUser(User user) {
		int returnInt = 0;
		String deleteSQl = "delete from user where id = ?";
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			PreparedStatement ps = conn.prepareStatement(deleteSQl);
			ps.setString(1, user.getId());
			returnInt = ps.executeUpdate();
			ps.close();
			return returnInt;
		} catch (Exception e) {
			// e.printStackTrace();
			return -1;
		} finally {
			DBUtil.close(conn);
		}

	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午2:05:04
	 * @Title: updateUserById
	 * @Description: TODO(Describe)
	 * @param id
	 * @return
	 */
	public int updateUserById(User user) {
		int returnInt = 0;
		String updateSQl = "update user set name = ?, password = ? where id = ?";
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			PreparedStatement ps = conn.prepareStatement(updateSQl);
			ps.setString(1, user.getName());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getId());
			returnInt = ps.executeUpdate();
			ps.close();
			return returnInt;
		} catch (Exception e) {
			return -1;
		} finally {
			DBUtil.close(conn);
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午2:00:27
	 * @Title: findAllUser
	 * @Description: TODO(Describe)
	 * @return
	 */
	public static List<User> findAllUser() {
		String findAllSQL = "select * from user";
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			PreparedStatement ps = conn.prepareStatement(findAllSQL);
			List<User> list = new ArrayList<User>();
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				User user = new User();
				user.setId(rs.getString("id"));
				user.setName(rs.getString("name"));
				user.setPassword(rs.getString("password"));
				list.add(user);
			}
			rs.close();
			ps.close();
			return list;
		} catch (Exception e) {
			// e.printStackTrace();
			return null;
		} finally {
			DBUtil.close(conn);
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午2:00:33
	 * @Title: findUserById
	 * @Description: TODO(Describe)
	 * @param id
	 * @return
	 */
	public static User findUserById(String id) {
		String findAllSQL = "select * from user where id = ?";
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			PreparedStatement ps = conn.prepareStatement(findAllSQL);
			ps.setString(1, id);
			ResultSet rs = ps.executeQuery();
			User user = new User();
			while (rs.next()) {
				user.setId(rs.getString("id"));
				user.setName(rs.getString("name"));
				user.setPassword(rs.getString("password"));
			}
			rs.close();
			ps.close();
			return user;
		} catch (Exception e) {
			// e.printStackTrace();
			return null;
		} finally {
			DBUtil.close(conn);
		}
	}

	/**
	 * @author LiuTao @date 2018年4月18日 下午1:45:45
	 * @Title: findStudentById
	 * @Description: TODO(Describe)
	 * @return
	 */
	public StudentModel findStudentById(Long id) {
		Connection conn = null;
		try {
			conn = DBUtil.getConnection();
			conn.setAutoCommit(false);// 关闭自动,开启事务
			String sql = "select * from student where id = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setLong(1, id);
			StudentModel stu = null;
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				stu = new StudentModel();
				stu.setId(rs.getLong("id"));
				stu.setName(rs.getString("name"));
				stu.setAge(rs.getLong("age"));
				stu.setTelephone(rs.getString("telephone"));
			}
			rs.close();
			ps.close();
			return stu;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			DBUtil.close(conn);
		}
	}
}
