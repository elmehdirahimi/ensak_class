package com.bhupeshpadiyar.sbrm.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "emplois")
public class Emplois {
	@Id
	private String id;
	
	private List<Emploi_data> emploi_data;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<Emploi_data> getEmploi_data() {
		return emploi_data;
	}

	public void setEmploi_data(List<Emploi_data> emploi_data) {
		this.emploi_data = emploi_data;
	}

	@Override
	public String toString() {
		return "Emplois [id=" + id + ", emploi_data=" + emploi_data + "]";
	}
	
	
}
