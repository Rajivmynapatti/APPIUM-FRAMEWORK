package Rough;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import Utils.MonitoringMail;
import Utils.TestConfig;

public class TestMailFormat {
	
	public static void main(String[] args) throws AddressException, MessagingException {
		
		MonitoringMail MM= new MonitoringMail();
		MM.sendMail(TestConfig.server, TestConfig.from, TestConfig.to, TestConfig.subject, TestConfig.messageBody, TestConfig.attachmentPath, TestConfig.attachmentName);
	}

}
