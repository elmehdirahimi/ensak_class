package com.bhupeshpadiyar.sbrm.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhupeshpadiyar.sbrm.model.ERole;
import com.bhupeshpadiyar.sbrm.model.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
