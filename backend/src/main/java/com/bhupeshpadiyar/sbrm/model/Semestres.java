package com.bhupeshpadiyar.sbrm.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
@AllArgsConstructor
@Document(collection = "semestres")
public class Semestres {
	@Id
	private String id;
	
	private String name;
	private ArrayList<String> modules;
	
	@DBRef
	private Emplois emploi;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public ArrayList<String> getModules() {
		return modules;
	}
	public void setModules(ArrayList<String> modules) {
		this.modules = modules;
	}
	public Emplois getEmploi() {
		return emploi;
	}
	public void setEmploi(Emplois emploi) {
		this.emploi = emploi;
	}
	@Override
	public String toString() {
		return "Semestres [id=" + id + ", name=" + name + ", modules=" + modules + ", emplois=" + emploi + "]";
	}

	
}
