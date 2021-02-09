package com.bhupeshpadiyar.sbrm.model;

//@Document(collection = "cours")
public class Cours {
	
	private String title;
	private String description;
	private String path;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public Cours(String title, String description, String path) {
		super();
		this.title = title;
		this.description = description;
		this.path = path;
	}
	@Override
	public String toString() {
		return "Cours [title=" + title + ", description=" + description + ", path=" + path + "]";
	}
	
}
