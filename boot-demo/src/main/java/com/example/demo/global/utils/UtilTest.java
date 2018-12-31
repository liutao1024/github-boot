package com.example.demo.global.utils;

import java.util.Set;
import java.util.TreeMap;

import org.junit.Test;

public class UtilTest {
	@Test
	public void Test001(){
		TreeMap<Integer, Object> treeMap = new TreeMap<Integer, Object>();
		treeMap.put(1, "2");
		treeMap.put(3, "1");
		treeMap.put(2, "4");
		treeMap.put(4, "3");
		
		
		Set<Integer> keys = treeMap.keySet();
		for(Integer key : keys){
			
			System.out.println(treeMap.get(key));
		}
		
	}
}
