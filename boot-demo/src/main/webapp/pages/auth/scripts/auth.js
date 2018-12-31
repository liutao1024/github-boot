var Auth = function(){

	var _userId = "sunline.userid";

	return {
	
		/**
         * 设置登陆用户ID
         *       
         */
		setCookieUserId: function(userId){
			$.cookie(_userId , userId);
		},
		
		/**
         * 读取登陆用户ID
         *       
         */
		getCookieUserId: function(){
			$.cookie(_userId);
		},
		
		/**
         * 删除登陆用户ID
         *       
         */
		deleteCookieUserId: function(){
			$.removeCookie(_userId);
		}
	};
}();