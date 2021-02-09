package com.bhupeshpadiyar.sbrm.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "etudiants")
public class Etudiants {
	@Id
	private String id;
	private String email;
	@DBRef
	private Semestres semestre;
	private ArrayList<Notes> notes;
	private ArrayList<Absences> absences;
	
	
	
	
	
	public Etudiants(String id, String email, Semestres semestre, ArrayList<Notes> notes,
			ArrayList<Absences> absences) {
		super();
		this.id = id;
		this.email = email;
		this.semestre = semestre;
		this.notes = notes;
		this.absences = absences;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Semestres getSemestre() {
		return semestre;
	}
	public void setSemestre(Semestres semestre) {
		this.semestre = semestre;
	}
	public ArrayList<Notes> getNotes() {
		return notes;
	}
	public void setNotes(ArrayList<Notes> notes) {
		this.notes = notes;
	}
	public ArrayList<Absences> getAbsences() {
		return absences;
	}
	public void setAbsences(ArrayList<Absences> absences) {
		this.absences = absences;
	}
	@Override
	public String toString() {
		return "Etudiants [id=" + id + ", email=" + email + ", semestre=" + semestre + ", notes=" + notes
				+ ", absences=" + absences + "]";
	}


	
	
	
}
