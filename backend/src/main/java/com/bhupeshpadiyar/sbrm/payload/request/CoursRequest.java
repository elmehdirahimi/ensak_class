package com.bhupeshpadiyar.sbrm.payload.request;

import org.springframework.web.multipart.MultipartFile;

import com.bhupeshpadiyar.sbrm.model.Modules;

public class CoursRequest {
private Modules modules;
private MultipartFile file;

public Modules getModules() {
	return modules;
}
public void setModules(Modules modules) {
	this.modules = modules;
}
public MultipartFile getFile() {
	return file;
}
public void setFile(MultipartFile file) {
	this.file = file;
}

}
