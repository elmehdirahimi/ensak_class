package com.bhupeshpadiyar.sbrm.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.Emplois;

public interface EmlpoiInterface  extends MongoRepository<Emplois, Long> {


}
