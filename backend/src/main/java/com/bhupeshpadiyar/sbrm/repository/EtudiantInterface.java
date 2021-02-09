package com.bhupeshpadiyar.sbrm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.Etudiants;


public interface EtudiantInterface extends MongoRepository<Etudiants, String> {
	  Etudiants findByEmail(String email);
	  Boolean existsByEmail(String email);

	}
