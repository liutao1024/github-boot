package com.example.demo.global.utils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("unchecked")
public class DaoUtil {
	/**
	 * 静态变量
	 */
	private static Connection connection = null;
	private static PreparedStatement preparedStatement = null;
	/**
	 * @author LiuTao @date 2018年5月11日 下午10:51:59 
	 * @Title: insert 
	 * @Description: TODO(Describe) 
	 * @param object
	 * @throws Exception 
	 */
	public static Map<String, String> insert(String tableStr, Map<String, String> srcMap){
		Map<String, String>  resultMap = new HashMap<String, String>();
		String sql = "insert into " + tableStr + " ";
		String sqlAppendColum = "";
		String sqlAppendValues = "";
		for(Map.Entry<String, String> entity : srcMap.entrySet()){
			sqlAppendColum =  ", " + sqlAppendColum + entity.getKey();
			sqlAppendValues = ", " + sqlAppendValues + entity.getValue();
		}
		sqlAppendColum = dealWith(",", sqlAppendColum); 
		sqlAppendValues = dealWith(",", sqlAppendValues);
		sql = sql + "(" + sqlAppendColum +")" + "values(" + sqlAppendColum + ")";
		try {
			connection = DBUtil.getConnection();
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.executeUpdate();
			
			resultMap.put("", "");
			resultMap.put("", "");
			resultMap.put("", "");
		} catch (Exception e) {
			resultMap.put("", "");
			resultMap.put("", "");
			resultMap.put("", "");
		}
		return resultMap;
	}

	public void delete(Object object) {
		
	}

	public void select(Object object) {
		
	}
	/**
	 * @author LiuTao @date 2018年5月11日 下午11:24:51 
	 * @Title: selectOneByPrimaryKey 
	 * @Description: TODO(Describe) 
	 * @param entity
	 */
	public static Map<String, Object> selectOneByPrimaryKey(String tableStr, Map<String, Object> srcMap) {
		Map<String, Object>  resultMap = new HashMap<String, Object>();
		String sql = "select * from " + tableStr + " where ";
		String conditionSql = "";
		for(Map.Entry<String, Object> entity : srcMap.entrySet()){
			conditionSql = "and "+ entity.getKey() + " = " + entity.getValue();
		}
		//需要将conditionSql处理一下
		conditionSql = dealWith("and", conditionSql);
		sql = sql + conditionSql;
		try {
			connection = DBUtil.getConnection();
			preparedStatement = connection.prepareStatement(sql);
			ResultSet resultSet = preparedStatement.executeQuery();
//			resultMap
			resultMap.putAll((Map<? extends String, ? extends Object>) resultSet);
//			Object object = resultSet;
			resultMap.put("", "");
			resultMap.put("", "");
			resultMap.put("", "");
		} catch (Exception e) {
			resultMap.put("", "");
			resultMap.put("", "");
			resultMap.put("", "");
		}
		return resultMap;
	}

	public void selectAll() {
		
	}
	
	public void selectGroupByKey(String entity) {
		
	}

	public void update(Object object) {
		
	}
	
	private static String dealWith(String headStr, String srcStr){
		//若srcStr是以headStr开头的将开头的headStr去掉返回
		if(srcStr.indexOf(headStr) == 1){
			srcStr = srcStr.substring(0, headStr.length());
		}
		return srcStr;
	}
}
