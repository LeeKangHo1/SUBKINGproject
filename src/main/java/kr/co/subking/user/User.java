package kr.co.subking.user;


import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class User {
	private String user_id;
	private String user_pw;
	private String user_birth;
	private String user_phone;
	private int gender;
	private String user_email;
	private String user_address;
	private String user_role;
	private Timestamp signupdate;
	private Timestamp updatedate;
}
