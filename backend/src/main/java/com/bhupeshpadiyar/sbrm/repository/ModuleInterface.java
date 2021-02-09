package com.bhupeshpadiyar.sbrm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.Modules;

public interface ModuleInterface  extends MongoRepository<Modules, Long> {


	public Modules findById(String id);
	public Long deleteById(String id);
	public Modules findByTitreModule(String titreModule);
}
