package com.bhupeshpadiyar.sbrm.model;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "absences")
public class Absences {
	
	
	@DBRef
	private Modules module;
	
	private int nbAbsences;
	
	

	public Absences(Modules module, int nbAbsences) {
		super();
		this.module = module;
		this.nbAbsences = nbAbsences;
	}

	public Modules getModule() {
		return module;
	}

	public void setModule(Modules module) {
		this.module = module;
	}

	public int getNbAbsences() {
		return nbAbsences;
	}

	public void setNbAbsences(int nbAbsences) {
		this.nbAbsences = nbAbsences;
	}

	@Override
	public String toString() {
		return "Absences [module=" + module + ", nbAbsences=" + nbAbsences + "]";
	}
	
	

}
