package com.bhupeshpadiyar.sbrm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.Services;

public interface ServiceInterface extends MongoRepository<Services, Long> {
	
	public Services findByTitle(String title);
	
}
