select * from  ap_sys_trans where trans_cd='qrprod';-- 交易表
select * from  ap_sys_encap ;  --
select * from AP_SYS_MSG;
select * from Ap_Sys_Column  ;

insert into AP_SYS_TRANS (trans_cd, trans_name, service_cd, encap_cd, trans_status, file_path, file_type, file_prefix, file_split, file_suffix, deal_cnt, cal_flag)
values ('qrprod', '贷款产品基础属性查询', 'sunflow', 'qrprod', 'Y', null, null, null, null, null, null, null);
insert into AP_SYS_ENCAP (encap_cd, encap_remark, req_msg, rsp_msg)
values ('qrprod', '贷款产品基础属性表', 'qrprodreq', 'qrprodrsp');
insert into AP_SYS_MSG (msg_cd, msg_remark, msg_define, split_char, msg_len, head_length, head_msg, xml_coding)
values ('qrprodreq', '贷款产品基础属性查询报文请求报文', 'J', null, '1', 6, 'sunflowhead', null);
insert into AP_SYS_MSG (msg_cd, msg_remark, msg_define, split_char, msg_len, head_length, head_msg, xml_coding)
values ('qrprodrsp', '贷款产品基础属性查询报文反馈报文', 'J', null, '1', 6, 'sunflowhead', null);
insert into ap_sys_column
  (column_cd,column_name,column_length,column_mapping, column_type, value_digit, date_pattern,default_value,cycling_flag,sort_seq, cycling_column,
   polish_type, polish_char, msg_cd)
  select column_cd,column_name, column_length, column_mapping, column_type, value_digit,date_pattern, default_value, cycling_flag,sort_seq,
         cycling_column,polish_type, polish_char,
         'qrprodreq' from ap_sys_column
   where msg_cd = 'ucpswdreq';   
delete from ap_sys_column a  where a.msg_cd =  'qrprodreq'and a.cycling_column='input'; 
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodcd','产品代码','prodcd','S','N',1,'input','qrprodreq') ; 
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodna','产品名称','prodna','S','N',2,'input','qrprodreq') ; 
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodtx','产品描述','prodtx','S','N',3,'input','qrprodreq') ; 
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('pageno','当前页数','pageno','S','N',4,'input','qrprodreq') ; 
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('pagect','每页记录数','pagect','S','N',5,'input','qrprodreq') ; 
select * from  ap_sys_column where msg_cd='qrprodreq';
insert into ap_sys_column
  (column_cd,column_name,column_length,column_mapping, column_type, value_digit, date_pattern,default_value,cycling_flag,sort_seq, cycling_column,
   polish_type, polish_char, msg_cd)
  select column_cd,column_name, column_length, column_mapping, column_type, value_digit,date_pattern, default_value, cycling_flag,sort_seq,
         cycling_column,polish_type, polish_char,'qrprodrsp' from ap_sys_column
   where msg_cd = 'dposelrsp'; 
	 select * from ap_sys_column a where a.msg_cd='qrprodrsp' for update; 
	 delete from  ap_sys_column where msg_cd='qrprodrsp' and cycling_column='pinfos';
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodcd','产品代码','prodcd','S','N',1,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodna','产品名称','prodna','S','N',2,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodtx','产品描述','prodtx','S','N',3,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('coorpr','贷款对象','coorpr','S','N',4,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('lncutp','贷款对象细分','lncutp','S','N',5,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('lnbztp','业务分类','lnbztp','S','N',6,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('isotbs','表外产品','isotbs','S','N',7,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('iscycl','循环贷款','iscycl','S','N',8,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('istxln','补贴贷款','istxln','S','N',9,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('issynd','银团贷款','issynd','S','N',10,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('syndio','银团贷款方式','syndio','S','N',11,'pinfos','qrprodrsp') ; 
	 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('syndtp','银团类别','syndtp','S','N',13,'pinfos','qrprodrsp') ;  
insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('syndit','内部银团成员行类型','syndit','S','N',14,'pinfos','qrprodrsp') ; 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('syndot','外部银团成员行类型','syndot','S','N',15,'pinfos','qrprodrsp') ; 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('borstp','资产转让类型','borstp','S','N',16,'pinfos','qrprodrsp') ; 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('ispion','纳入忠诚度/积分计划','ispion','S','N',17,'pinfos','qrprodrsp') ; 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('caldtp','产品关联的日历类型','caldtp','S','N',18,'pinfos','qrprodrsp') ; 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('efctdt','生效日期','efctdt','S','N',19,'pinfos','qrprodrsp'); 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('inefdt','失效日期','inefdt','S','N',20,'pinfos','qrprodrsp'); 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('creadt','产品建立日期','creadt','S','N',21,'pinfos','qrprodrsp'); 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('creaus','产品建立柜员','creaus','S','N',22,'pinfos','qrprodrsp'); 
 insert into ap_sys_column a (a.column_cd,a.column_name,a.column_mapping,a.column_type,a.cycling_flag,a.sort_seq,a.cycling_column,a.msg_cd)
values('prodst','产品状态','prodst','S','N',23,'pinfos','qrprodrsp'); 
select * from ap_sys_column;