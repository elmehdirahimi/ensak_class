package com.bhupeshpadiyar.sbrm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.bhupeshpadiyar.sbrm.model.Modules;
import com.bhupeshpadiyar.sbrm.repository.ModuleInterface;


@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "http://localhost:3000")
public class ModulesControler {
	
	@Autowired
	private ModuleInterface moduleInterface;
	
	
	@GetMapping(value = "/modules")
	public Map<String, Object> getAllModules() {
		
		List<Modules> modules =  moduleInterface.findAll();
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("modules", modules);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
		
		return responseMap;
	}
	
	@GetMapping(value = "/module/{titreModule}")
	public Map<String, Object> findModule(@PathVariable String titreModule) {
	
		Modules module = moduleInterface.findByTitreModule(titreModule);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("module", module);
		responseMap.put("titreModule", titreModule);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	@PostMapping(value = "/module")
	public Map<String, Object> saveModule(@RequestBody Modules module) {
		Modules savedModule = moduleInterface.save(module);
		Map<String, Object> responseMap = new HashMap<>();
		
		responseMap.put("module", savedModule);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
//	
//	@PutMapping(value = "/module")
//	public Map<String, Object> updateModule(@RequestBody Modules module,@RequestParam("file") MultipartFile file) {
//		fileInterface.save(file);
//		Modules updatedModule = moduleInterface.save(module);
//		Map<String, Object> responseMap = new HashMap<>();
//		responseMap.put("module", updatedModule);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//	    return responseMap;
//	}
	
	@PutMapping(value = "/module")
	public Map<String, Object> updateModule(@RequestBody Modules modules ) {
		Modules updatedModule = moduleInterface.save(modules);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("module", updatedModule);
		responseMap.put("status", 200);
		responseMap.put("message", "Success");
	    return responseMap;
	}
	
	
//	@PostMapping(value = "/file")
//	public Map<String, Object> updateModule(@RequestParam("file") MultipartFile file) {
//		String message = "";
//	
//		 try {
//			 fileInterface.save(file);
//
//		      message = "Uploaded the file successfully: " + file.getOriginalFilename();
//		    } catch (Exception e) {
//		      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//		    }
//		 
//		Map<String, Object> responseMap = new HashMap<>();
//		responseMap.put("message2", message);
//		responseMap.put("status", 200);
//		responseMap.put("message", "Success");
//	    return responseMap;
//	}
//	
	
	@DeleteMapping(value = "/module/{id}")
	public Map<String, Object> deleteModule(@PathVariable String id) {
		
		Map<String, Object> responseMap = new HashMap<>();
		
		try {
			moduleInterface.deleteById(id);
			
			responseMap.put("module", true);
			responseMap.put("status", 200);
			responseMap.put("message", "Success");
			
		} catch (Exception e) {
			responseMap.put("module", false);
			responseMap.put("status", 500);
			responseMap.put("message", "Error");
		}
		
		
	    return responseMap;
	}

}
