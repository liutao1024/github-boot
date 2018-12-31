package com.example.demo.xtest;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

public class DBUtilTest {
	public static void main(String[] args) {
		// UserDao userDao = new UserDao();
		// Long id = Long.parseLong("2002");
		// StudentModel student = userDao.findStudentById(id);
		// if (student!=null) {
		// System.out.println(student.getName());
		// }else {
		// throw new NullPointerException("空指针异常");
		// }
		User user = new User();
		user.setId("0832028359");
		user.setName("陈冠希");
		user.setPassword("liudaye");
		int a = UserDao.addUser(user);
		if(a == 1){
			System.out.println("新增用户"+user.getName()+"成功");
		}else {
			System.out.println("新增失败!");
		}
	}
}
