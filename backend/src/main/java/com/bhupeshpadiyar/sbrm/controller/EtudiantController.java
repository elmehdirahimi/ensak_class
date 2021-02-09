package com.bhupeshpadiyar.sbrm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhupeshpadiyar.sbrm.model.ERole;
import com.bhupeshpadiyar.sbrm.model.Etudiants;
import com.bhupeshpadiyar.sbrm.model.User;
import com.bhupeshpadiyar.sbrm.repository.EtudiantInterface;
import com.bhupeshpadiyar.sbrm.repository.RoleRepository;
import com.bhupeshpadiyar.sbrm.repository.UserRepository;

@RestController
@RequestMapping("/api/etudiants")
@CrossOrigin(origins = "http://localhost:3000")
public class EtudiantController {

	@Autowired
	private EtudiantInterface etudiantInterface;

	@Autowired
	private UserRepository userRepository;


	@Autowired
	RoleRepository roleRepository;
	
	@GetMapping(value = "/")
	public Map<String, Object> getAllEtudiant() {
		
		List<User> etudiants = userRepository.findAll().stream()
			    .filter(p -> p.getRoles().iterator().next().getName() == ERole.ROLE_USER).collect(Collectors.toList());;
		
//		HashSet<Role> roles = new HashSet<Role>();
//		Role userRole = roleRepository.findByName(ERole.ROLE_USER)
//				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//		roles.add(userRole);
//		
//		
//		Optional<User> etudiants = userRepository.findByRolesId(new ObjectId(userRole.getId()));
//		Optional<User> etudiants = userRepository.findByRoles(roles);
		Map<String, Object> responseMap = new HashMap<>();

		responseMap.put("etudiants", etudiants);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");

		return responseMap;
	}

//	@GetMapping(value = "/")
//	public Map<String, Object> getAllEtudiant() {
//		
//		List<Etudiants> etudiants =  etudiantInterface.findAll();
//		Map<String, Object> responseMap = new HashMap<>();
//		
//		responseMap.put("etudiants", etudiants);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//		
//		return responseMap;
//	}

	@GetMapping(value = "/etudiant/{email}")
	public Map<String, Object> findEtudiant(@PathVariable String email) {

		Etudiants etudiants = etudiantInterface.findByEmail(email);
		Map<String, Object> responseMap = new HashMap<>();

		responseMap.put("etudiant", etudiants);
		responseMap.put("email", email);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@PostMapping(value = "/etudiant")
	public Map<String, Object> saveEtudiant(@RequestBody Etudiants etudiant) {
		Etudiants savedEtudiant = etudiantInterface.save(etudiant);
		Map<String, Object> responseMap = new HashMap<>();

		responseMap.put("etudiant", savedEtudiant);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@PutMapping(value = "/etudiant")
	public Map<String, Object> updateEtudiant(@RequestBody Etudiants etudiant) {
		
		Etudiants updatedEtudiant = etudiantInterface.save(etudiant);
		Map<String, Object> responseMap = new HashMap<>();

		responseMap.put("etudiant", updatedEtudiant);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		return responseMap;
	}

	@DeleteMapping(value = "/etudiant/{id}")
	public Map<String, Object> deleteEtudiant(@PathVariable String id) {

		Map<String, Object> responseMap = new HashMap<>();

		try {
			etudiantInterface.deleteById(id);

			responseMap.put("etudiant", true);
			responseMap.put("status", 200);
			responseMap.put("message", "Success");

		} catch (Exception e) {
			responseMap.put("etudiant", false);
			responseMap.put("status", 500);
			responseMap.put("message", "Error");
		}

		return responseMap;
	}

}
