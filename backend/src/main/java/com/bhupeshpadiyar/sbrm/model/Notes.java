package com.bhupeshpadiyar.sbrm.model;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "cours")
public class Notes {
	@DBRef
	private Modules module;
	private Double note;
	public Modules getModule() {
		return module;
	}
	public void setModule(Modules module) {
		this.module = module;
	}
	public Double getNote() {
		return note;
	}
	public void setNote(Double note) {
		this.note = note;
	}
	public Notes(Modules module, Double note) {
		super();
		this.module = module;
		this.note = note;
	}
	
	
}
