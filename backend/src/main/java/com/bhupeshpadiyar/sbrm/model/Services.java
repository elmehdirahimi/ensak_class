package com.bhupeshpadiyar.sbrm.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "services")
public class Services {
	private String title;
	private String path;
	public Services(String title, String path) {
		super();
		this.title = title;
		this.path = path;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	@Override
	public String toString() {
		return "Services [title=" + title + ", path=" + path + "]";
	}
	
	
	
}
