package com.bhupeshpadiyar.sbrm.controller;

	
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.bhupeshpadiyar.sbrm.repository.FileInterface;
@RestController
@RequestMapping("/api/files")
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilesController {

	  @Autowired
	  FileInterface fileInterface;

  @PostMapping("/upload")
  public Map<String, Object> uploadFile( @RequestParam("file") MultipartFile file) {
	  try {
		fileInterface.save(file);
	} catch (Exception e) {
		// TODO: handle exception
	}
    
  	Map<String, Object> responseMap = new HashMap<>();
	responseMap.put("path", file.getOriginalFilename());
	responseMap.put("status", 200);
	responseMap.put("message", "Success");
    return responseMap;
   
  }

//	@GetMapping(value = "/file/{filename:.+}")
//	public Map<String, Object> getFile(@PathVariable String filename) {
//		
//		    Resource file = fileInterface.load(filename);
//		    
//		    Map<String, Object> responseMap = new HashMap<>();
//			responseMap.put("file", file);
//			responseMap.put("status", 200);
//			responseMap.put("message", "Success");
//		    return responseMap;
//		  }	
	
	  @GetMapping("/file/{filename:.+}")
	  public ResponseEntity<Resource> getFile(@PathVariable String filename) {
	    Resource file = fileInterface.load(filename);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
	  }
	  

//	  @GetMapping("/file/{filename:.+}")
//	  public ResponseEntity<FileInfo> getFile(@PathVariable String filename) {
//		  Resource file = fileInterface.load(filename);
//	      String myfilename = file.getFilename().toString();
//	      String url = MvcUriComponentsBuilder
//	          .fromMethodName(FilesController.class, "getFile", file.getFilename().toString()).build().toString();
//	      FileInfo fileInfos =  new FileInfo(myfilename, url);
//	  return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
//
//	  }
}
