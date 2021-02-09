package com.bhupeshpadiyar.sbrm.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
@AllArgsConstructor
@Document(collection = "modules")
public class Modules {

	@Id
	private String id;

	private String titreModule;
	private ArrayList<Cours> cours;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitreModule() {
		return titreModule;
	}
	public void setTitreModule(String titreModule) {
		this.titreModule = titreModule;
	}
	public ArrayList<Cours> getCours() {
		return cours;
	}
	public void setCours(ArrayList<Cours> cours) {
		this.cours = cours;
	}
	@Override
	public String toString() {
		return "Modules [id=" + id + ", titreModule=" + titreModule + ", cours=" + cours + "]";
	}

	
	
	
	
}