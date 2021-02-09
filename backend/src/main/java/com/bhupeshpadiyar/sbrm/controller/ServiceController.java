package com.bhupeshpadiyar.sbrm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bhupeshpadiyar.sbrm.model.Services;
import com.bhupeshpadiyar.sbrm.repository.ServiceInterface;


@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {
	
	@Autowired
	private ServiceInterface serviceInterface;
	
	
	@GetMapping(value = "/")
	public Map<String, Object> getAllServices() {
		
		List<Services> services =  serviceInterface.findAll();
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("services", services);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		
		return responseMap;
	}
	

	
//	@GetMapping(value = "/semestre/{name}")
//	public Map<String, Object> findSemestres(@PathVariable String name) {
//		
//		Semestres semestre = semestreInterface.findByName(name);
//		Map<String, Object> responseMap = new HashMap<>();
//		
//		responseMap.put("semestre", semestre);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//	    return responseMap;
//	}
	
	
//	@PostMapping(value = "/semestre")
//	public Map<String, Object> saveSemestre(@RequestBody Semestres semestre) {
//		Semestres savedSemestre = semestreInterface.save(semestre);
//		Map<String, Object> responseMap = new HashMap<>();
//		
//		responseMap.put("semestre", savedSemestre);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//	    return responseMap;
//	}
//	
//	@PutMapping(value = "/semestre")
//	public Map<String, Object> updateSemestre(@RequestBody Semestres semestre) {
//		Semestres updatedSemestres = semestreInterface.save(semestre);
//		Map<String, Object> responseMap = new HashMap<>();
//		
//		responseMap.put("semestres", updatedSemestres);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//	    return responseMap;
//	}
	
//	@DeleteMapping(value = "/module/{id}")
//	public Map<String, Object> deleteSemestre(@PathVariable String id) {
//		
//		Map<String, Object> responseMap = new HashMap<>();
//		
//		try {
//			semestreInterface.deleteById(id);
//			
//			responseMap.put("semestres", true);
//			responseMap.put("status", 200);
//			responseMap.put("message", "Success");
//			
//		} catch (Exception e) {
//			responseMap.put("semestre", false);
//			responseMap.put("status", 500);
//			responseMap.put("message", "Error");
//		}
//		
//		
//	    return responseMap;
//	}

}