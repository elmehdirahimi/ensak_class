package com.bhupeshpadiyar.sbrm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.Semestres;

public interface SemestreInterface  extends MongoRepository<Semestres, Long> {
	public Semestres findById(String id);
	public Semestres findByName(String name);
	public Semestres deleteById(String id);
}
