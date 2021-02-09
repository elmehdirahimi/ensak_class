package com.bhupeshpadiyar.sbrm.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "emploi_data")
public class Emploi_data {
	
private String title;
private String daysOfWeek;
private String startTime;
private String endTime;


public Emploi_data(String title, String daysOfWeek, String startTime, String endTime) {
	super();
	this.title = title;
	this.daysOfWeek = daysOfWeek;
	this.startTime = startTime;
	this.endTime = endTime;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public String getDaysOfWeek() {
	return daysOfWeek;
}
public void setDaysOfWeek(String daysOfWeek) {
	this.daysOfWeek = daysOfWeek;
}
public String getStartTime() {
	return startTime;
}
public void setStartTime(String startTime) {
	this.startTime = startTime;
}
public String getEndTime() {
	return endTime;
}
public void setEndTime(String endTime) {
	this.endTime = endTime;
}
@Override
public String toString() {
	return "Emploi_data [title=" + title + ", daysOfWeek=" + daysOfWeek + ", startTime=" + startTime + ", endTime="
			+ endTime + "]";
}


}
